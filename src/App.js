import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Review from './pages/Review';
import Test from './pages/Test';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to detect if the device is mobile
    const detectMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      // Checks for Android, iPhone, iPad, iPod
      if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent)) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    detectMobile();
  }, []);

  if (isMobile) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-xl font-bold text-red-500">
          Please open on a desktop
        </h1>
      </div>
    );
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
