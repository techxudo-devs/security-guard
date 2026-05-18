"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href?: string;
  sectionId?: string;
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();
  const router = useRouter();

  const isHomePage = pathname === "/";

  const scrollToSection = (sectionId: string, updateHash = true) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    const headerOffset = 100;
    const top = section.getBoundingClientRect().top + window.scrollY - headerOffset;
    
    window.scrollTo({
      top,
      behavior: "smooth",
    });

    if (updateHash) {
      window.history.replaceState(null, "", `#${sectionId}`);
    }
  };

  const handleSectionNavigation = (sectionId: string) => {
    if (isHomePage) {
      scrollToSection(sectionId);
      setIsMenuOpen(false);
      return;
    }
    router.push(`/#${sectionId}`);
  };

  // UPDATED NAV ITEMS: Ab ye links smooth scroll karengy
  const navItems: NavItem[] = [
    { label: "Home", sectionId: "hero" },
    { label: "About", sectionId: "about" },
    { label: "Services", sectionId: "services" },
    { label: "Packages", sectionId: "pricing" },
    { label: "Reviews", sectionId: "reviews" },
  ];

  const isItemActive = (item: NavItem) => {
    if (!item.sectionId) return false;
    return isHomePage && activeSection === item.sectionId;
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHomePage) return;
    const sectionIds = ["hero", "about", "services", "pricing", "reviews", "contact"];
    const updateActiveSection = () => {
      const viewportAnchor = window.scrollY + 140;
      let closestSection = "hero";
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= viewportAnchor) {
          closestSection = sectionId;
        }
      }
      setActiveSection(closestSection);
    };
    window.addEventListener("scroll", updateActiveSection);
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [isHomePage]);

  return (
    <header className={`sticky top-0 z-50 md:fixed md:left-0 md:right-0 md:transition-all md:duration-500 ${isScrolled ? "md:py-4" : "md:py-0"}`}>
      <nav className={`flex items-center justify-between border-b px-4 py-4 md:mx-auto md:transition-all md:duration-500 ${
          isScrolled
            ? "md:w-[calc(100%-2rem)] md:max-w-4xl 2xl:max-w-5xl md:rounded-xl md:border md:border-purple-800 md:bg-black md:px-6 md:py-3 md:shadow-lg md:backdrop-blur-xl"
            : "md:w-full md:max-w-full md:border-transparent md:bg-transparent md:px-8 md:py-5"
        }`}>
        
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <h1 className="font-black italic text-2xl md:text-3xl tracking-tighter font-sora text-white">
            SS <span className="text-purple-600">Security</span>
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center rounded-full border border-purple-200/80 bg-purple-100/70 p-1.5 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleSectionNavigation(item.sectionId || "hero")}
              className={`rounded-full px-4 py-2 transition-all cursor-pointer duration-200 font-sora ${
                isItemActive(item)
                  ? "bg-white text-purple-600 shadow-sm"
                  : "text-black hover:text-purple-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 md:hidden text-zinc-700 bg-white rounded-full border border-zinc-200"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button 
            onClick={() => handleSectionNavigation("contact")}
            className="rounded-full bg-purple-600 px-6 py-3 text-sm font-bold text-white hover:bg-purple-700 transition-all font-sora shadow-lg shadow-purple-500/20 cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-96 border-b shadow-lg" : "max-h-0"}`}>
        <div className="flex flex-col p-4 gap-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleSectionNavigation(item.sectionId || "hero")}
              className="text-left font-bold text-zinc-800 py-3 px-4 rounded-lg hover:bg-purple-50"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
