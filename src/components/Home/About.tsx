"use client";

import React from "react";
import Image from "next/image";
import gunImage from "@/assets/ghora.avif"; // Reusing hero image for consistency or using the provided asset
import { ShieldCheck, Target, Zap, Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const stats = [
    { label: "Active Guards", value: "850+", icon: <ShieldCheck size={20} className="text-purple-400" /> },
    { label: "Sites Protected", value: "120+", icon: <Target size={20} className="text-blue-400" /> },
    { label: "Response Time", value: "<5m", icon: <Zap size={20} className="text-cyan-400" /> },
    { label: "Awards Won", value: "24", icon: <Award size={20} className="text-indigo-400" /> },
  ];

  return (
    <section id="about" className="w-full py-10 bg-black relative overflow-hidden border-t border-white/5">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Visual Side (Image Section) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            
            {/* Main Image Container */}
            <div className="relative aspect-[4/5] md:aspect-square rounded-[2.5rem] overflow-hidden border border-white/10 group shadow-2xl">
              <Image 
                src={gunImage}
                alt="Professional Security Guard"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                priority
              />
              {/* Glass Overlay with HUD elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                <p className="text-white font-sora text-sm italic font-light leading-relaxed">
                  "At SS Security, we don't just observe; we protect. Our protocols are designed for preemptive defense and rapid containment."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-1 w-12 bg-purple-500 rounded-full"></div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wide font-semibold">Strategic Command</span>
                </div>
              </div>
            </div>

            {/* Experience Card */}
            <div className="absolute -top-6 -right-6 md:top-12 md:-right-12 bg-[#0A0A0A] border border-white/10 p-8 rounded-3xl shadow-2xl hidden sm:block group hover:border-purple-500/50 transition-colors duration-500">
              <div className="flex flex-col items-center">
                <span className="text-5xl font-black text-white font-sora tracking-tighter mb-1">15+</span>
                <span className="text-purple-500 font-bold text-[10px] uppercase tracking-wider">Years of Trust</span>
                <div className="mt-4 flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Abstract HUD Ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full pointer-events-none animate-spin-slow"></div>
          </motion.div>

          {/* Content Side */}
          <div className="space-y-10">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-[1px] bg-purple-500"></div>
                <span className="text-purple-500 text-xs font-black uppercase tracking-wider font-sora">
                  Defense Intelligence
                </span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-white font-sora leading-none tracking-tight"
              >
                Global Security <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                  Standardized.
                </span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-sm md:text-base font-light leading-normal font-sora max-w-xl"
              >
                SS Security provides comprehensive protection strategies for complex environments. 
                Our approach integrates military-grade personnel with cutting-edge surveillance technology 
                to create an impenetrable perimeter around your assets.
              </motion.p>
            </div>

            {/* Stats Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-2"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-[#080808] border border-white/5 p-5 rounded-3xl hover:border-purple-500/30 transition-all duration-500">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mb-4 border border-white/10">
                    {stat.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white font-sora mb-1 tracking-tight">{stat.value}</h4>
                  <p className="text-gray-500 text-[10px] uppercase tracking-wide font-semibold">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;