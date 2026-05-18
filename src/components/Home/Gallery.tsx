"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ImageIcon, Video as VideoIcon } from "lucide-react";

// Import all images
import ss1 from "@/assets/ss1.jpeg";
import ss2 from "@/assets/ss2.jpeg";
import ss3 from "@/assets/ss3.jpeg";
import ss4 from "@/assets/ss4.jpeg";
import ss5 from "@/assets/ss5.jpeg";
import ss6 from "@/assets/ss6.jpeg";
import ss7 from "@/assets/ss7.jpeg";
import ss8 from "@/assets/ss8.jpeg";
import ss9 from "@/assets/ss9.jpeg";
import ss10 from "@/assets/ss10.jpeg";
import ss11 from "@/assets/ss11.jpeg";
import ss12 from "@/assets/ss12.jpeg";
import ss13 from "@/assets/ss13.jpeg";
import ss14 from "@/assets/ss14.jpeg";
import ss15 from "@/assets/ss15.jpeg";
import ss16 from "@/assets/ss16.jpeg";

const Gallery = () => {
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');

  const items = [
    { id: 1, type: 'video' as const, src: "/video1.mp4", title: "Tactical Response Training" },
    { id: 2, type: 'video' as const, src: "/video2.mp4", title: "Executive Protection Drill" },
    { id: 3, type: 'video' as const, src: "/video3.mp4", title: "Night Surveillance Ops" },
    { id: 4, type: 'image' as const, src: ss1, title: "Asset Protection", objectPos: 'object-top' },
    { id: 5, type: 'image' as const, src: ss2, title: "K9 Unit", objectPos: 'object-top' },
    { id: 6, type: 'image' as const, src: ss3, title: "Command Center", objectPos: 'object-center' },
    { id: 7, type: 'image' as const, src: ss4, title: "Elite Guard", objectPos: 'object-top' },
    { id: 8, type: 'image' as const, src: ss5, title: "Surveillance Team", objectPos: 'object-top' },
    { id: 9, type: 'image' as const, src: ss6, title: "Patrol Unit", objectPos: 'object-center' },
    { id: 10, type: 'image' as const, src: ss7, title: "High-Value Escort", objectPos: 'object-center' },
    { id: 11, type: 'image' as const, src: ss8, title: "Strategic Briefing", objectPos: 'object-center' },
    { id: 12, type: 'image' as const, src: ss9, title: "Event Perimeter", objectPos: 'object-center' },
    { id: 13, type: 'image' as const, src: ss10, title: "Facility Security", objectPos: 'object-center' },
    { id: 14, type: 'image' as const, src: ss11, title: "Close Protection", objectPos: 'object-center' },
    { id: 15, type: 'image' as const, src: ss12, title: "Advanced HUD Ops", objectPos: 'object-center' },
    { id: 16, type: 'image' as const, src: ss13, title: "Night Patrol", objectPos: 'object-center' },
    { id: 17, type: 'image' as const, src: ss14, title: "Armor Deployment", objectPos: 'object-center' },
    { id: 18, type: 'image' as const, src: ss15, title: "Rapid Response", objectPos: 'object-center' },
    { id: 19, type: 'image' as const, src: ss16, title: "Secure Transport", objectPos: 'object-center' },
  ];

  return (
    <section id="gallery" className="w-full py-10 bg-black relative overflow-hidden border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-purple-500 font-bold tracking-wider uppercase text-xs mb-4 font-sora"
          >
            Visual Command
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white font-sora tracking-tight leading-none"
          >
            Operational <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Excellence.</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square rounded-2xl overflow-hidden group border border-white/5 bg-[#080808]"
              >
                {item.type === 'video' ? (
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-full object-cover"
                    key={`video-${item.id}`}
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image 
                    src={item.src} 
                    alt={item.title}
                    fill
                    className={`object-cover transition-transform duration-700 group-hover:scale-110 ${item.objectPos || 'object-center'}`}
                  />
                )}
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="relative">
                    <div className="w-8 h-[1px] bg-purple-500 mb-2"></div>
                    <h4 className="text-white font-sora text-[10px] font-bold uppercase tracking-wider">
                      {item.title}
                    </h4>
                  </div>
                </div>

                {/* Type Icon Tag */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70">
                  {item.type === 'video' ? <VideoIcon size={14} /> : <ImageIcon size={14} />}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;