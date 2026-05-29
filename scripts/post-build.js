import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'dist', 'client');
const destDir = path.join(process.cwd(), 'dist');

console.log('[Byalance Post-Build] Duplicating dist/client files into dist root folder for seamless Cloudflare hosting...');

try {
  if (fs.existsSync(srcDir)) {
    // Copy all contents of dist/client into dist recursively
    fs.cpSync(srcDir, destDir, { recursive: true, force: true });
    console.log('[Byalance Post-Build] Successfully duplicated all built files and assets!');
  } else {
    console.warn('[Byalance Post-Build] Warning: dist/client directory was not found. Make sure vike build completed.');
  }
} catch (error) {
  console.error('[Byalance Post-Build] Post-build duplication failed:', error);
  process.exit(1);
}
