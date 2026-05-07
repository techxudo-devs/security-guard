"use client";

import React, { useState } from "react";
import { Star, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "react-fast-marquee";

// --- Types ---
interface Review {
  id: number;
  name: string;
  date: string;
  location: string;
  rating: number;
  text: string;
}

const Reviews: React.FC = () => {
  // --- Data ---
  const reviews: Review[] = [
    {
      id: 1,
      name: "Sarah Jenkins",
      date: "12 March, 2026",
      location: "New York, NY",
      rating: 5,
      text: "The security personnel provided for our corporate event were professional, punctual, and highly observant. They integrated seamlessly with our staff and ensured a safe environment for all our guests. Their presence was both reassuring and discreet, exactly what we needed for a high-profile gathering.",
    },
    {
      id: 2,
      name: "Michael Chen",
      date: "28 February, 2026",
      location: "San Francisco, CA",
      rating: 5,
      text: "We've been using their residential patrol services for six months now. The peace of mind knowing our neighborhood is being watched by experts is invaluable. The guards are friendly but firm, and the digital reporting system keeps us informed of every patrol. Highly recommended for any HOA.",
    },
    {
      id: 3,
      name: "David Rodriguez",
      date: "15 January, 2026",
      location: "Austin, TX",
      rating: 5,
      text: "The on-site guard for our construction project has been exceptional. Not only did they prevent multiple theft attempts during the night shift, but their daily reports are thorough and professional. They really take ownership of the site's safety.",
    },
    {
      id: 4,
      name: "Elena Volkova",
      date: "10 December, 2025",
      location: "London, UK",
      rating: 5,
      text: "Top-tier executive protection. Their team is discreet, well-trained, and extremely capable. I felt completely safe throughout my entire business trip in high-risk areas. Their advance planning and local knowledge were particularly impressive.",
    },
    {
      id: 5,
      name: "James Wilson",
      date: "22 November, 2025",
      location: "Chicago, IL",
      rating: 4,
      text: "Fast response times and excellent communication. When our alarm system went off at 2 AM, their mobile patrol was on-site within minutes. They cleared the building and stayed until we arrived. Truly reliable service when it matters most.",
    },
    {
      id: 6,
      name: "Robert Gold",
      date: "05 October, 2025",
      location: "Miami, FL",
      rating: 5,
      text: "We hired them for our high-end jewelry store, and the presence of their armed guards has significantly deterred any suspicious activity. Very professional appearance and conduct. They understand the balance between security and customer service.",
    },
    {
      id: 7,
      name: "Linda Thompson",
      date: "18 September, 2025",
      location: "Seattle, WA",
      rating: 5,
      text: "Impressive attention to detail. The security audit they performed for our warehouse identified several vulnerabilities we hadn't considered. The subsequent implementation of their recommended protocols has greatly improved our loss prevention.",
    },
    {
      id: 8,
      name: "Kevin Brown",
      date: "30 August, 2025",
      location: "Atlanta, GA",
      rating: 5,
      text: "Great team to work with. They took the time to understand our specific security needs for the retail complex and tailored their services accordingly. The transition was smooth, and the guards have become a valued part of our daily operations.",
    },
  ];

  // --- States ---
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  // --- Handlers ---
  const openModal = (review: Review) => {
    setSelectedReview(review);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setSelectedReview(null);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = "unset";
    }
  };

  const renderStars = (count: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < count ? "#a855f7" : "#374151"}
          stroke={i < count ? "#a855f7" : "#374151"}
          className="mr-0.5"
        />
      ));
  };

  return (
    <section className="w-full py-10 bg-black overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="flex flex-col items-center mb-10 text-center">
          <span className="text-purple-500 font-semibold tracking-wider uppercase text-sm mb-3">Testimonials</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-sora tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mt-6 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Summary Box */}
          <div className="shrink-0 w-full lg:w-[320px]">
            <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center h-full min-h-[250px] shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="text-white font-sora text-6xl sm:text-7xl font-bold mb-4 relative z-10">4.9</span>
              <div className="flex gap-1 mb-4 relative z-10">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} size={24} fill="#a855f7" stroke="#a855f7" />
                ))}
              </div>
              <p className="text-gray-400 text-sm font-medium relative font-sora z-10">Based on 250+ client reviews</p>
              <div className="mt-6 flex items-center gap-2 relative z-10">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0A0A0A] bg-gray-800 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-tr from-purple-500 to-blue-500 opacity-80"></div>
                    </div>
                  ))}
                </div>
                <span className="text-xs font-sora text-gray-500 font-semibold uppercase tracking-tighter">Top Rated</span>
              </div>
            </div>
          </div>

          {/* Marquee Carousel */}
          <div className="flex-1 overflow-hidden relative flex items-center">
            <Marquee gradient={true} gradientColor="black" speed={40} pauseOnHover={false} className="py-4 overflow-y-hidden">
              {reviews.map((review) => (
                <div key={review.id} className="w-[320px] md:w-[450px] mx-2">
                  <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-7 h-[280px] flex flex-col justify-between hover:border-purple-500/30 transition-all duration-500 group relative">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-purple-500">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017C11.4647 13 11.017 12.5523 11.017 12V9C11.017 6.23858 13.2556 4 16.017 4H19.017C20.1216 4 21.017 4.89543 21.017 6V15C21.017 18.3137 18.3307 21 15.017 21H14.017Z" />
                        <path d="M3.01703 21L3.01703 18C3.01703 16.8954 3.91246 16 5.01703 16H8.01703C8.56932 16 9.01703 15.5523 9.01703 15V9C9.01703 8.44772 8.56932 8 8.01703 8H5.01703C4.46475 8 4.01703 8.44772 4.01703 9V12C4.01703 12.5523 3.56932 13 3.01703 13H1.01703C0.464746 13 -3.1026e-07 12.5523 -2.78315e-07 12V9C-1.57464e-07 6.23858 2.23858 4 5.01703 4H8.01703C9.1216 4 10.017 4.89543 10.017 6V15C10.017 18.3137 7.33074 21 4.01703 21H3.01703Z" />
                      </svg>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-white font-bold text-xl group-hover:text-purple-400 transition-colors font-sora">
                          {review.name}
                        </h3>
                        <div className="flex shrink-0">{renderStars(review.rating)}</div>
                      </div>
                      <p className="text-gray-500 text-xs mb-4 uppercase font-sora font-semibold">
                        {review.date} | {review.location}
                      </p>
                      <p className="text-gray-400 text-sm leading-normal font-sora line-clamp-4 italic">
                        "{review.text}"
                      </p>
                    </div>

                    <button
                      onClick={() => openModal(review)}
                      className="text-purple-500 text-xs font-bold uppercase font-sora self-start hover:text-white cursor-pointer transition-all duration-300 mt-4 flex items-center gap-1"
                    >
                      Full Testimonial <span className="text-lg">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

      </div>

      {/* --- MODAL --- */}
      <AnimatePresence>
        {selectedReview && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeModal}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#0A0A0A] border border-white/10 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col relative z-10"
            >
              {/* Header */}
              <div className="flex justify-between items-start p-6 border-b border-white/5 bg-gradient-to-r from-purple-500/10 to-transparent">
                <div>
                  <h3 className="text-2xl font-bold text-white font-sora">{selectedReview.name}</h3>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex">{renderStars(selectedReview.rating)}</div>
                    <span className="text-sm font-sora text-gray-500">• {selectedReview.date}</span>
                  </div>
                  <p className="text-xs font-sora text-purple-500 font-bold uppercase tracking-widest mt-2">{selectedReview.location}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 bg-white/5 rounded-full cursor-pointer hover:bg-white/10 transition-colors duration-300 text-gray-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="p-8 overflow-y-auto custom-scrollbar">
                <p className="text-gray-300 text-lg leading-normal whitespace-pre-line italic font-sora">
                  "{selectedReview.text}"
                </p>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-white/5 bg-black/50 text-center">
                <span className="text-xs text-purple-500 uppercase tracking-wide font-sora font-black">Verified Client Partner</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Reviews;