"use client";

import React from "react";
import { 
  ShieldCheck, 
  Users, 
  Video, 
  Building2, 
  HardHat, 
  ClipboardCheck,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Executive Protection",
      description: "Discreet and professional close protection for high-profile individuals and executives in high-risk environments.",
      icon: <ShieldCheck size={28} />,
      color: "from-purple-500/20 to-purple-600/5",
    },
    {
      id: 2,
      title: "Event Security",
      description: "Comprehensive security planning and crowd management for corporate events, concerts, and private gatherings.",
      icon: <Users size={28} />,
      color: "from-blue-500/20 to-blue-600/5",
    },
    {
      id: 3,
      title: "CCTV & Monitoring",
      description: "24/7 remote surveillance and rapid response coordination using state-of-the-art security technology.",
      icon: <Video size={28} />,
      color: "from-cyan-500/20 to-cyan-600/5",
    },
    {
      id: 4,
      title: "Residential Patrol",
      description: "Dedicated mobile patrols and static guards for residential complexes and private estates to ensure community safety.",
      icon: <Building2 size={28} />,
      color: "from-indigo-500/20 to-indigo-600/5",
    },
    {
      id: 5,
      title: "Construction Security",
      description: "On-site protection for valuable equipment and materials, including access control and theft prevention protocols.",
      icon: <HardHat size={28} />,
      color: "from-violet-500/20 to-violet-600/5",
    },
    {
      id: 6,
      title: "Risk Assessment",
      description: "Expert security audits and strategic consulting to identify vulnerabilities and implement effective countermeasures.",
      icon: <ClipboardCheck size={28} />,
      color: "from-fuchsia-500/20 to-fuchsia-600/5",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="w-full py-10 bg-black relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-purple-600/5 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            <span className="text-gray-400 text-xs font-bold uppercase tracking-wider font-sora">
              Our Capabilities
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white font-sora tracking-tight leading-none"
          >
            Security Solutions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Without Compromise.
            </span>
          </motion.h2 >
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-gray-400 max-w-3xl text-sm md:text-base lg:text-lg font-light leading-normal font-sora"
          >
            We combine high-stakes expertise with advanced technology to deliver 
            tailored security services that protect your most valuable assets.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative p-1 rounded-lg overflow-hidden transition-all duration-500"
            >
              
              <div className="relative bg-[#080808] rounded-2xl p-6 h-full border border-white/5 group-hover:border-purple-500/30 transition-all duration-500 flex flex-col justify-between">
                <div>
                  {/* Icon Box */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-500 text-white`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white font-sora mb-4 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-normal font-light group-hover:text-gray-400 transition-colors">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-wide group-hover:text-purple-500 transition-colors">
                    Contact Us
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-500 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    <FaWhatsapp size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-col items-center"
        >
          <button 
            onClick={() => {
              const section = document.getElementById("contact");
              if (section) {
                const headerOffset = 100;
                const top = section.getBoundingClientRect().top + window.scrollY - headerOffset;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }}
            className="px-8 py-4 bg-white rounded-full text-purple-600 font-bold text-sm uppercase font-sora transition-all duration-300 cursor-pointer hover:scale-97"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;