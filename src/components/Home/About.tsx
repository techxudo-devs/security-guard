"use client";
import Image from 'next/image';
import gunImage from "@/assets/ghora.avif"

const About = () => {
  return (
    <section id="about" className="py-24 bg-black scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side (Image Section) */}
          <div className="relative">
            {/* Decorative Background Glow */}
            <div className="absolute -inset-4 bg-purple-600/20 blur-3xl rounded-full" />
            
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(147,51,234,0.2)] border border-white/10 group">
              {/* Security Guard Image */}
              <Image 
                src={gunImage}
                alt="Security Guard"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                priority
              />
              
              {/* Overlay with Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex items-end p-8 md:p-12">
                <p className="text-white font-sora text-xl md:text-2xl italic z-10 font-medium leading-relaxed border-l-4 border-purple-600 pl-4">
                  "Securing your assets with elite protection. Your safety is our mission."
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-purple-600 p-6 rounded-2xl shadow-2xl hidden md:block border border-white/20">
              <span className="block text-4xl font-black text-white">10+</span>
              <span className="text-purple-100 font-bold text-[10px] uppercase tracking-[0.2em]">Years of Trust</span>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 relative">
            <div className="space-y-4">
              <h2 className="text-purple-500 font-bold tracking-[0.3em] uppercase text-xs font-sora">
                About SecutiGuard
              </h2>
              <h3 className="text-4xl md:text-6xl font-black text-white font-sora leading-tight tracking-tighter">
                Elite Defense <br /> 
                <span className="text-purple-500 italic">For Peace of Mind</span>
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed font-sora max-w-xl">
                SecutiGuard specialized hai professional security solutions mein. Hum trained guards aur modern surveillance ke zariye aapke environment ko mehfooz banate hain.
              </p>
            </div>

            {/* Feature List */}
            <ul className="space-y-5 font-sora font-semibold text-zinc-300">
              {[
                "Armed & Unarmed Personnel", 
                "24/7 Rapid Response Unit", 
                "Smart Monitoring Systems"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <div className="h-5 w-5 rounded-md border border-purple-500/50 flex items-center justify-center group-hover:bg-purple-600 transition-all">
                    <div className="h-1.5 w-1.5 bg-purple-500 group-hover:bg-white rounded-full" />
                  </div>
                  <span className="group-hover:text-white transition-colors uppercase text-sm tracking-wide">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <button className="group relative bg-white text-black px-12 py-5 rounded-full font-black font-sora hover:bg-purple-600 hover:text-white transition-all duration-500 uppercase tracking-tighter text-sm overflow-hidden">
                <span className="relative z-10">Get A Quote</span>
                <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
