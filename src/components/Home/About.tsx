"use client";
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-zinc-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <div className="relative">
            <div className="aspect-square bg-purple-900 rounded-3xl overflow-hidden relative shadow-2xl flex items-center justify-center border-8 border-white">
              <div className="absolute inset-0 bg-black/20" />
              <p className="text-white font-sora text-xl italic z-10 px-12 text-center font-medium">
                "Securing your assets with elite protection. Your safety is our mission."
              </p>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-purple-100 hidden md:block">
              <span className="block text-4xl font-black text-purple-600">10+</span>
              <span className="text-zinc-500 font-bold text-xs uppercase tracking-widest">Years of Trust</span>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-purple-600 font-bold tracking-widest uppercase text-sm font-sora">
                About SecutiGuard
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-zinc-900 font-sora leading-tight">
                Professional Defense <br /> 
                <span className="text-purple-600">For Peace of Mind</span>
              </h3>
              <p className="text-zinc-600 text-lg leading-relaxed font-sora">
                SecutiGuard specialized hai professional security solutions mein. Hum trained guards aur modern surveillance ke zariye aapke environment ko mehfooz banate hain.
              </p>
            </div>

            <ul className="space-y-4 font-sora font-bold text-zinc-800">
              {["Armed & Unarmed Personnel", "24/7 Rapid Response Unit", "Smart Monitoring Systems"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-purple-600 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="bg-purple-600 text-white px-10 py-4 rounded-full font-bold font-sora hover:bg-black transition-all shadow-lg">
              Get A Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
