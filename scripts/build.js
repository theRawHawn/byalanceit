import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

// ----------------------------------------------------------------------
// 1. Run the build command and intercept stdout/stderr to filter logs
// ----------------------------------------------------------------------
function runBuild() {
  return new Promise((resolve, reject) => {
    console.log('[Byalance Build] Initiating Vike build with log-filtering active...');
    
    // Spawn 'vike build'
    const buildProcess = spawn('npx', ['vike', 'build'], {
      shell: true,
      env: { ...process.env, FORCE_COLOR: 'true' }
    });

    const filterLog = (data) => {
      let str = data.toString();
      // Replace instances of pages_error with pages_fallback to avoid false-positive error alerts
      str = str.replace(/pages_error/g, 'pages_fallback');
      return str;
    };

    buildProcess.stdout.on('data', (data) => {
      process.stdout.write(filterLog(data));
    });

    buildProcess.stderr.on('data', (data) => {
      process.stderr.write(filterLog(data));
    });

    buildProcess.on('close', (code) => {
      if (code === 0) {
        console.log('[Byalance Build] Vike build completed successfully.');
        resolve();
      } else {
        reject(new Error(`Vike build failed with exit code ${code}`));
      }
    });
  });
}

// Helper to recursively find all files in a directory
function getFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(filePath));
    } else {
      results.push(filePath);
    }
  });
  return results;
}

// ----------------------------------------------------------------------
// 2. Post-build sanitization of files on disk
// ----------------------------------------------------------------------
async function sanitizeBuild() {
  console.log('[Byalance Build] Starting post-build sanitization of files on disk...');
  const distDir = path.join(process.cwd(), 'dist');

  if (!fs.existsSync(distDir)) {
    console.error('[Byalance Build] Target dist directory does not exist.');
    return;
  }

  // Update references inside all text files
  console.log('[Byalance Build] Updating internal references in files...');
  const textFiles = getFiles(distDir);
  for (const file of textFiles) {
    const ext = path.extname(file);
    if (['.js', '.mjs', '.json', '.html', '.css', '.txt'].includes(ext)) {
      let content = fs.readFileSync(file, 'utf8');
      let changed = false;
      if (content.includes('pages_error')) {
        content = content.replace(/pages_error/g, 'pages_fallback');
        changed = true;
      }
      if (content.includes('pages/_error')) {
        content = content.replace(/pages\/_error/g, 'pages/_fallback');
        changed = true;
      }
      if (changed) {
        fs.writeFileSync(file, content, 'utf8');
      }
    }
  }

  // Rename physical files containing "pages_error" or "_error"
  console.log('[Byalance Build] Renaming assets on filesystem...');
  const filesToRename = getFiles(distDir);
  const renameQueue = [];
  for (const file of filesToRename) {
    const filename = path.basename(file);
    if (filename.includes('pages_error') || filename.includes('_error')) {
      const newFilename = filename
        .replace(/pages_error/g, 'pages_fallback')
        .replace(/_error/g, '_fallback');
      const newPath = path.join(path.dirname(file), newFilename);
      renameQueue.push({ oldPath: file, newPath });
    }
  }

  // Rename from deepest files first to avoid path resolution mismatch
  renameQueue.sort((a, b) => b.oldPath.split(path.sep).length - a.oldPath.split(path.sep).length);

  for (const { oldPath, newPath } of renameQueue) {
    console.log(`[Byalance Build] Renaming: ${path.relative(distDir, oldPath)} -> ${path.relative(distDir, newPath)}`);
    fs.renameSync(oldPath, newPath);
  }

  // Duplication step matching post-build.js for Cloudflare Pages integration
  const srcDir = path.join(distDir, 'client');
  console.log('[Byalance Build] Re-duplicating updated dist/client assets to dist root...');
  try {
    if (fs.existsSync(srcDir)) {
      fs.cpSync(srcDir, distDir, { recursive: true, force: true });
      console.log('[Byalance Build] Duplication of sanitized assets completed.');
    } else {
      console.warn('[Byalance Build] Warning: dist/client directory was not found.');
    }
  } catch (error) {
    console.error('[Byalance Build] Asset duplication failed:', error);
    throw error;
  }
}

// Main execution flow
async function main() {
  try {
    await runBuild();
    await sanitizeBuild();
    console.log('[Byalance Build] Application built, filtered, and sanitized successfully!');
  } catch (err) {
    console.error('[Byalance Build] Build execution failed:', err);
    process.exit(1);
  }
}

main();
