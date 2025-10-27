import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Sparkles, Wind } from 'lucide-react';

export function ComingSoonHero() {
  const [email, setEmail] = useState('');

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Handle email submission here
    setEmail('');
  };

  return (
    <>
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12 pb-32">
        {/* Logo/Brand Section */}
        <div className="mb-8 flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00B2EB] to-[#09A8B7] blur-xl opacity-50"></div>
            <div className="relative bg-gradient-to-br from-[#00B2EB]/20 to-[#09A8B7]/20 backdrop-blur-xl border border-[#00B2EB]/30 rounded-2xl p-4">
              <Wind className="w-8 h-8 text-[#00B2EB]" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00B2EB]/10 to-[#09A8B7]/10 backdrop-blur-xl border border-[#00B2EB]/30">
            <Sparkles className="w-4 h-4 text-[#00B2EB]" />
            <span className="text-[#9DD5FF]">Launching Soon</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl tracking-tight">
            <span className="bg-gradient-to-r from-white via-[#9DD5FF] to-[#00B2EB] bg-clip-text text-transparent">
              Sterilised Air Solutions
            </span>
          </h1>

          {/* Key Benefits - Glass Boxes */}
          <div className="flex flex-wrap items-center justify-center gap-4 py-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00B2EB] to-[#09A8B7] blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-[#00B2EB]/30 rounded-2xl px-6 py-3">
                <p className="text-[#9DD5FF]">Increase Occupancy</p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00B2EB] to-[#09A8B7] blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-[#00B2EB]/30 rounded-2xl px-6 py-3">
                <p className="text-[#9DD5FF]">Lower Absenteeism</p>
              </div>
            </div>
          </div>

          {/* Subheading */}
          <p className="text-sm md:text-base text-[#9DD5FF]/80 max-w-4xl mx-auto">
            Sterilised Air Solutions System transforms Care/Nursing Homes into environments that promote physical, mental, and emotional wellbeing for residents and staff alike. It enhances operational quality, reduces costs, supports regulatory compliance, and provides investors with credible, measurable ESG value — turning a Care/Nursing Home from a place to live into a place to thrive for Zero Capital Expenditure.
          </p>

          {/* Coming Soon Date */}
          <div className="py-4">
            <p className="text-2xl md:text-3xl bg-gradient-to-r from-[#00B2EB] to-[#09A8B7] bg-clip-text text-transparent">
              Coming December 2025
            </p>
          </div>

          {/* Email Form */}
          <div className="relative mt-12">
            {/* Glass block background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00B2EB]/20 to-[#09A8B7]/20 blur-3xl opacity-50"></div>
            
            {/* Glass container */}
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-2xl border border-[#00B2EB]/20 rounded-3xl p-8 md:p-10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B2EB]/5 via-transparent to-[#09A8B7]/5 rounded-3xl"></div>
              
              <div className="relative space-y-4">
                <h3 className="bg-gradient-to-r from-white to-[#9DD5FF] bg-clip-text text-transparent">
                  Get Notified When We Launch
                </h3>
                
                <form onSubmit={handleNotifyMe} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-white/5 backdrop-blur-xl border-[#00B2EB]/30 text-white placeholder:text-[#9DD5FF]/40 focus:border-[#00B2EB] transition-all h-12"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="relative group bg-gradient-to-r from-[#00B2EB] to-[#09A8B7] hover:from-[#00B2EB]/90 hover:to-[#09A8B7]/90 text-white border-0 h-12 px-8 overflow-hidden"
                    >
                      <span className="relative z-10">Notify Me</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#09A8B7] to-[#00B2EB] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Black Background */}
      <div className="fixed bottom-0 left-0 right-0 z-20 bg-black border-t border-[#00B2EB]/20">
        <div className="flex items-center justify-center py-6">
          <p className="text-[#9DD5FF]/60">© 2025 Sterilised Air Solutions. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
