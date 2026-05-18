"use client";

import React from "react";
import Link from "next/link";
import { 
  Shield, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { 
  FaTwitter, 
  FaLinkedinIn, 
  FaFacebookF, 
  FaInstagram 
} from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About", href: "#" },
      { name: "Services", href: "#" },
      { name: "Packages", href: "#" },
      { name: "Reviews", href: "#" },
    ],
    services: [
      { name: "Executive Protection", href: "#" },
      { name: "Event Security", href: "#" },
      { name: "CCTV Monitoring", href: "#" },
      { name: "Risk Assessment", href: "#" },
    ],
    legal: [
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
      { name: "Cookie", href: "#" },
      { name: "Compliance", href: "#" },
    ],
  };

  return (
    <footer className="w-full bg-[#050505] pt-10 pb-10 relative overflow-hidden border-t border-white/5">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-10">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-600/20 group-hover:scale-110 transition-transform duration-300">
                <Shield className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold text-white font-sora tracking-tighter">
                SS<span className="text-purple-500">Security</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-light">
              Providing elite-tier protection and strategic security solutions worldwide. 
              Our mission is to ensure your assets, people, and peace of mind are 
              safeguarded through unparalleled expertise and cutting-edge technology.
            </p>
            <div className="flex items-center gap-2">
              {[FaTwitter, FaLinkedinIn, FaFacebookF, FaInstagram].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-wide font-sora">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-500 text-sm hover:text-purple-400 transition-colors flex items-center gap-1 group">
                    <span className="w-0 h-[1px] bg-purple-400 group-hover:w-3 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-wide font-sora">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-500 text-sm hover:text-purple-400 transition-colors flex items-center gap-1 group">
                    <span className="w-0 h-[1px] bg-purple-400 group-hover:w-3 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-white font-bold text-sm uppercase tracking-wide font-sora">Stay Protected</h4>
            <p className="text-gray-500 text-sm font-light">
              Subscribe to our Intelligence Briefing for the latest in global security trends.
            </p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Secure email address"
                className="w-full bg-white/5 border border-white/10 rounded-xl text-sm px-6 py-4 text-white placeholder:text-gray-700 focus:border-purple-500/50 outline-none transition-all duration-300"
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center text-white hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/20 cursor-pointer duration-300"
              >
                <ArrowRight size={18} />
              </button>
            </form>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-500 text-sm">
                <Phone size={16} className="text-purple-500" />
                <span>+1 (888) 555-0123</span>
              </div>
              <div className="flex items-center gap-3 text-gray-500 text-sm">
                <Mail size={16} className="text-purple-500" />
                <span>hq@sssecurity.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent mb-10"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-gray-600 text-xs font-medium">
            <ShieldCheck size={14} className="text-purple-900" />
            <span>&copy; {currentYear} SS Security. ISO 27001 Certified.</span>
          </div>
          
          <div className="flex items-center gap-4">
            {footerLinks.legal.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-gray-600 text-xs hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;