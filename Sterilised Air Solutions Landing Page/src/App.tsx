import React from 'react';
import { ComingSoonHero } from './components/ComingSoonHero';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#001220] to-[#00202E] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00B2EB] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#09A8B7] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#006486] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
      </div>
      
      <ComingSoonHero />
    </div>
  );
}
