"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2,
  Clock,
  ShieldCheck
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Contact: React.FC = () => {
  // --- Form State ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- Handlers ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const services = [
    "Executive Protection",
    "Event Security",
    "CCTV & Monitoring",
    "Residential Patrol",
    "Construction Security",
    "Risk Assessment",
    "Other Services",
  ];

  return (
    <section id="contact" className="w-full py-10 bg-black relative overflow-hidden border-t border-white/5">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-purple-500 font-bold tracking-wider uppercase text-xs mb-4 block font-sora"
          >
            Get in Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white font-sora tracking-tight leading-none"
          >
            Secure Your Future <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Start a Conversation.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-10"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg font-sora mb-1">Email Us</h4>
                  <p className="text-gray-400 text-sm font-light">Contact our strategy team at</p>
                  <a href="mailto:contact@sssecurity.com" className="text-purple-400 font-bold text-sm hover:underline">contact@sssecurity.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg font-sora mb-1">Call Anytime</h4>
                  <p className="text-gray-400 text-sm font-light">24/7 Operations Command</p>
                  <p className="text-blue-400 font-bold text-sm">+1 (888) 555-0123</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg font-sora mb-1">Global HQ</h4>
                  <p className="text-gray-400 font-light leading-normal text-sm">
                    Financial District, Suite 400 <br />
                    New York, NY 10005
                  </p>
                </div>
              </div>
            </div>

            {/* Why Contact Us Note */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#0A0A0A] to-transparent border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <ShieldCheck size={80} className="text-purple-500" />
              </div>
              <h5 className="text-white font-bold mb-4 flex items-center gap-2 font-sora">
                <Clock size={18} className="text-purple-500" />
                Response Guarantee
              </h5>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                Our strategic response team evaluates every inquiry within 2 hours. For emergency deployment, please use our 24/7 hotline.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#080808] border border-white/10 rounded-3xl p-4 md:p-6 relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide font-sora ml-1">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder:text-gray-700 focus:border-purple-500/50 focus:bg-white/10 outline-none transition-all duration-300 font-sora text-xs md:text-sm"
                    />
                  </div>
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide font-sora ml-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder:text-gray-700 focus:border-purple-500/50 focus:bg-white/10 outline-none transition-all duration-300 font-sora text-xs md:text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide font-sora ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (000) 000-0000"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder:text-gray-700 focus:border-purple-500/50 focus:bg-white/10 outline-none transition-all duration-300 font-sora text-xs md:text-sm"
                    />
                  </div>
                  {/* Service Dropdown */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide font-sora ml-1">Interested Service</label>
                    <select 
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white appearance-none focus:border-purple-500/50 focus:bg-white/10 outline-none transition-all duration-300 font-sora text-xs md:text-sm"
                    >
                      <option value="" disabled className="bg-black text-gray-500">Select a Service</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-black text-white">{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide font-sora ml-1">Operational Brief / Message</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="How can we protect your assets?"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder:text-gray-700 focus:border-purple-500/50 focus:bg-white/10 outline-none transition-all duration-300 font-sora text-xs md:text-sm resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:scale-98 cursor-pointer transition-all duration-500 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed md:text-base text-sm"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    <>
                      Deploy Inquiry
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              {/* Success Message Overlay */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 bg-[#080808]/90 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center text-center p-8 z-20"
                  >
                    <div className="w-20 h-20 bg-purple-500/20 border border-purple-500/30 rounded-full flex items-center justify-center text-purple-500 mb-6">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-3xl font-bold text-white font-sora mb-2">Inquiry Deployed</h3>
                    <p className="text-gray-400 max-w-sm leading-normal">
                      Thank you for contacting SS Security. One of our strategy agents will reach out to you shortly.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 text-purple-500 font-bold hover:underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;