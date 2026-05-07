"use client";

import React from "react";
import { Check, Shield, Zap, Globe, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

interface PackageFeature {
  text: string;
  included: boolean;
}

interface PricingPackage {
  id: number;
  name: string;
  tagline: string;
  price: string;
  period: string;
  icon: React.ReactNode;
  features: PackageFeature[];
  popular?: boolean;
  buttonText: string;
  gradient: string;
}

const Packages: React.FC = () => {
  const packages: PricingPackage[] = [
    {
      id: 1,
      name: "Essential Shield",
      tagline: "Basic security for small businesses.",
      price: "$2,499",
      period: "per month",
      icon: <Shield size={24} className="text-blue-400" />,
      gradient: "from-blue-500/20 to-transparent",
      buttonText: "Get Started",
      features: [
        { text: "Unarmed Guard (8h Shift)", included: true },
        { text: "24/7 Monitoring", included: true },
        { text: "Daily Digital Reports", included: true },
        { text: "Mobile Patrol Check-ins", included: true },
        { text: "Armed Response", included: false },
        { text: "Dedicated Security Lead", included: false },
      ],
    },
    {
      id: 2,
      name: "Elite Sentinel",
      tagline: "Comprehensive protection for corporations.",
      price: "$5,999",
      period: "per month",
      popular: true,
      icon: <Zap size={24} className="text-purple-400" />,
      gradient: "from-purple-500/20 to-transparent",
      buttonText: "Select Pro Plan",
      features: [
        { text: "Armed/Unarmed Hybrid Guards", included: true },
        { text: "24/7 Command Center Access", included: true },
        { text: "CCTV Integration & Monitoring", included: true },
        { text: "Rapid Response Unit (Under 5m)", included: true },
        { text: "Executive Protection Services", included: true },
        { text: "Bi-Weekly Security Audits", included: true },
      ],
    },
    {
      id: 3,
      name: "Omni Command",
      tagline: "Total security for high-risk assets.",
      price: "Custom",
      period: "Contact for Pricing",
      icon: <Globe size={24} className="text-cyan-400" />,
      gradient: "from-cyan-500/20 to-transparent",
      buttonText: "Inquire Now",
      features: [
        { text: "24/7 Full Armed Deployment", included: true },
        { text: "K9 Unit Support", included: true },
        { text: "Intelligence Gathering & Risk Analysis", included: true },
        { text: "Aerial Drone Surveillance", included: true },
        { text: "Logistical & Transit Security", included: true },
        { text: "Dedicated On-Site Command Post", included: true },
      ],
    },
  ];

  return (
    <section className="w-full py-10 bg-black relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-purple-500 font-bold tracking-wider uppercase text-xs mb-4"
          >
            Tiered Security Solutions
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white font-sora tracking-tight"
          >
            Elite Guard Packages
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-400 max-w-2xl text-lg font-light leading-normal"
          >
            Choose the level of protection that fits your operational needs. From essential monitoring to total site command.
          </motion.p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative flex flex-col p-8 rounded-3xl border ${
                pkg.popular 
                  ? "bg-[#0c0c0c] border-purple-500/50 shadow-[0_0_40px_-10px_rgba(168,85,247,0.2)]" 
                  : "bg-[#050505] border-white/5 hover:border-white/20"
              } transition-all duration-500 group overflow-hidden`}
            >
              {/* Card Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-700`}></div>

              {pkg.popular && (
                <div className="absolute top-6 right-8">
                  <span className="bg-purple-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg shadow-purple-600/40">
                    Most Selected
                  </span>
                </div>
              )}

              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  {pkg.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white font-sora mb-2 group-hover:text-purple-400 transition-colors">
                  {pkg.name}
                </h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                  {pkg.tagline}
                </p>

                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-bold text-white font-sora tracking-tighter">
                    {pkg.price}
                  </span>
                  <span className="text-gray-500 text-sm font-medium">
                    / {pkg.period}
                  </span>
                </div>

                <div className="space-y-4 mb-10">
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <div className={`mt-1 shrink-0 ${feature.included ? "text-purple-500" : "text-gray-700"}`}>
                        {feature.included ? (
                          <Check size={18} />
                        ) : (
                          <ShieldAlert size={18} />
                        )}
                      </div>
                      <span className={`text-sm ${feature.included ? "text-gray-300" : "text-gray-600 line-through"}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <button 
                  className={`w-full py-4 rounded-2xl font-bold text-sm transition-all duration-300 cursor-pointer ${
                    pkg.popular 
                      ? "bg-purple-600 text-white hover:bg-purple-700 shadow-xl shadow-purple-600/20" 
                      : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {pkg.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-col items-center"
        >
          <div className="px-6 py-3 bg-white/5 border border-white/5 rounded-full flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full border border-black bg-gray-800 flex items-center justify-center text-[10px] text-gray-500 font-bold">
                  {i}
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 font-medium">
              Join <span className="text-white font-bold">500+ secure facilities</span> worldwide.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;