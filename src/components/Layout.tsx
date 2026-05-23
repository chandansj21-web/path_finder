import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import VoiceFAB from './VoiceFAB';

const Layout = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Animation */}
      <div className="stars-container">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <Outlet />
      </main>

      <VoiceFAB />
    </div>
  );
};

export default Layout;
