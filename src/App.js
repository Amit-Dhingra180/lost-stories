import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Review from './pages/Review';
import Test from './pages/Test';
import StoryInfo from './pages/StoryInfo';

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
      <div className="flex items-center justify-center h-screen w-full bg-darkgrey">
        <h1 className="text-2xl font-bold text-white">
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
          <Route path="/StoryInfo/:id" element={<StoryInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
