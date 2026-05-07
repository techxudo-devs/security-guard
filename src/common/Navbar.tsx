"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// import GooeyButton from "@/components/ui/button";

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
  const homeSectionHref = (sectionId: string) =>
    isHomePage ? `#${sectionId}` : `/#${sectionId}`;

  const scrollToSection = (sectionId: string, updateHash = true) => {
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    const headerOffset = 100;
    const top =
      section.getBoundingClientRect().top + window.scrollY - headerOffset;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });

    if (updateHash) {
      window.history.replaceState(null, "", `#${sectionId}`);
    }
  };

  const handleSectionNavigation = (sectionId: string) => {
    if (isHomePage) {
      scrollToSection(sectionId);
      return;
    }

    router.push(`/#${sectionId}`);
  };

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Packages", href: "/pricing" },
    { label: "Reviews", href: "/contact" },
  ];

  const resolveNavHref = (item: NavItem) =>
    item.href ?? homeSectionHref(item.sectionId || "hero");

  const isItemActive = (item: NavItem) => {
    if (item.href) {
      if (item.href === "/") {
        return pathname === "/" && activeSection === "hero";
      }

      return pathname === item.href;
    }

    if (!item.sectionId) {
      return false;
    }

    return isHomePage && activeSection === item.sectionId;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const sectionIds = ["about", "clientele", "contact"];

    const updateActiveSection = () => {
      const viewportAnchor = window.scrollY + 140;
      let closestSection = "hero";

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);

        if (!element) {
          continue;
        }

        if (element.offsetTop <= viewportAnchor) {
          closestSection = sectionId;
        }
      }

      setActiveSection(closestSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, [isHomePage]);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const sectionId = window.location.hash.replace("#", "");

    if (!sectionId) {
      return;
    }

    const timer = window.setTimeout(() => {
      scrollToSection(sectionId, false);
    }, 150);

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 md:fixed md:left-0 md:right-0 md:transition-all md:duration-500 ${
        isScrolled ? "md:py-4" : "md:py-0"
      }`}
    >
      <nav
        className={`flex items-center justify-between border-b px-4 py-4 md:mx-auto md:transition-[width,max-width,padding,border-radius,background-color,box-shadow,border-color] md:duration-500 ${
          isScrolled
            ? "md:w-[calc(100%-2rem)] md:max-w-4xl 2xl:max-w-5xl md:rounded-xl md:border md:border-purple-800 md:bg-black md:px-6 md:py-3 md:shadow-[0_12px_28px_-16px_rgba(246,173,69,0.28)] md:backdrop-blur-xl"
            : "md:w-full md:max-w-[100%] md:rounded-none md:border-transparent md:bg-transparent md:px-8 md:py-5 md:shadow-none"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="shrink-0">
          {/* <Image
            src={logo}
            alt="Auto Pitch"
            width={180}
            height={180}
            className={`h-auto w-[120px] md:transition-all md:duration-500 ${
              isScrolled
                ? "md:w-[100px] 2xl:w-[130px]"
                : "2xl:w-[165px] md:w-[120px]"
            }`}
          /> */}
          <h1 className="font-black italic text-2xl md:text-3xl 2xl:text-4xl tracking-tighter">
            <span className="text-purple-600">secuti</span>guard
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center rounded-full border border-purple-200/80 bg-purple-100/70 p-1.5 2xl:text-sm text-sm font-medium text-purple-600 md:flex">
          {navItems.map((item) =>
            item.sectionId ? (
              <button
                key={item.label}
                type="button"
                className={`rounded-full px-4 py-2 transition-all duration-200 ${
                  isItemActive(item)
                    ? "bg-white text-purple-600 shadow-sm"
                    : "text-zinc-600 hover:text-purple-600"
                }`}
                onClick={() =>
                  handleSectionNavigation(item.sectionId || "hero")
                }
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.label}
                className={`rounded-full px-4 py-2 transition-all duration-200 ${
                  isItemActive(item)
                    ? "bg-white text-purple-600 shadow-sm"
                    : "text-black hover:text-purple-600"
                }`}
                href={resolveNavHref(item)}
              >
                {item.label}
              </Link>
            ),
          )}
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex items-center justify-center rounded-full border border-zinc-200 bg-white p-2 text-zinc-700 transition hover:text-blue-600 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-menu"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isMenuOpen ? "M6 18 18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="rounded-full bg-purple-600 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 cursor-pointer hover:bg-purple-700 shadow-lg shadow-purple-500/20">
            Get Started Now
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav-menu"
        className={`absolute left-0  right-0 top-full overflow-hidden transition-[max-height] duration-300 ease-out md:hidden ${
          isMenuOpen
            ? "pointer-events-auto max-h-[420px] bg-white"
            : "pointer-events-none max-h-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMenuOpen}
      >
        <div className="px-4 pb-4 pt-2">
          <div className="rounded-b-2xl border border-t-0 border-zinc-200 bg-white p-3">
            <div className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
              {navItems.map((item) => (
                <div key={`mobile-${item.label}`}>
                  {item.sectionId ? (
                    <button
                      type="button"
                      className={`w-full rounded-xl px-3 py-3 text-left transition-all duration-200 ${
                        isItemActive(item)
                          ? "bg-purple-50 text-purple-700"
                          : "hover:bg-zinc-100 hover:text-purple-600"
                      }`}
                      onClick={() => {
                        handleSectionNavigation(item.sectionId || "hero");
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      className={`block rounded-xl px-3 py-3 transition-all duration-200 ${
                        isItemActive(item)
                          ? "bg-blue-50 text-blue-700"
                          : "hover:bg-zinc-100 hover:text-blue-600"
                      }`}
                      href={resolveNavHref(item)}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-3 border-t border-zinc-100 pt-3">
              <button
                type="button"
                onClick={() => {
                  handleSectionNavigation("contact");
                  setIsMenuOpen(false);
                }}
                className="flex w-full items-center justify-center rounded-full bg-blue-600 px-4 py-3 text-xs font-[600] uppercase tracking-wide text-white"
              >
                Start Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}