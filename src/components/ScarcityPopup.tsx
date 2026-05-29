import { useState, useEffect } from 'react';
import { X, TriangleAlert } from 'lucide-react';

const ScarcityPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 backdrop-blur-md overflow-y-auto h-full w-full flex items-center justify-center z-50"
    >
      <div className="bg-white p-6 rounded-lg shadow-xl relative max-w-md mx-auto">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>
        <div className='text-center pt-4'>
            <div className="inline-block bg-red-100 p-3 rounded-full">
                <TriangleAlert className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-lg leading-6 font-bold text-red-600 mt-4">
                NOTICE
            </h3>
            <div className="mt-2 px-7 py-3">
                <p className="text-sm font-bold text-gray-600">
                To ensure the highest quality of service, we onboard only 8 new clients each month - Grab your spot now.
                </p>
            </div>
            <div className="items-center px-4 py-3">
                <button
                    onClick={() => setIsVisible(false)}
                    className="px-4 py-2 bg-red-600 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                    I Understand
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ScarcityPopup;
