"use client";

import Image from "next/image";
import heroImg from "@/assets/hero.avif";
import LightRays from "../Backgrounds/LightRays";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 100;
      const top = section.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt="Hero Background"
          fill
          priority
          className="object-cover opacity-50"
        />
        {/* Optional Overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Light Rays Effect */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <LightRays
          raysColor="#b200ff"
          raysSpeed={0.5}
          lightSpread={0.8}
          rayLength={1.5}
          className="opacity-80"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-white text-center mt-10 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-sora tracking-tight">
          Uncompromising Protection. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Expertly Delivered.
          </span>
        </h1>
        <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-4xl mx-auto">
          We provide world-class security solutions tailored to your specific
          needs. From corporate campuses to private estates, our highly trained
          professionals ensure your assets, people, and peace of mind are always
          protected.
        </p>

        <div className="flex md:flex-row flex-col items-center justify-center gap-0 md:gap-4">
          <button 
            onClick={() => scrollToSection("services")}
            className="mt-8 rounded-full bg-purple-600 px-6 py-4 text-sm font-bold text-white transition-all duration-300 cursor-pointer hover:bg-purple-700 shadow-md shadow-purple-500/20 font-sora"
          >
            View Our Services
          </button>
          <button 
            onClick={() => scrollToSection("about")}
            className="mt-3 md:mt-8 rounded-full bg-transparent border-2 border-white px-6 py-3.5 text-sm font-bold text-white transition-all duration-500 cursor-pointer hover:bg-white hover:text-black shadow-md shadow-white/20 font-sora"
          >
            Why Choose Us?
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
