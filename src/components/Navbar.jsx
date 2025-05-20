import React, { useState } from "react";

const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "Specifications", href: "#specifications" },
  { name: "About Us", href: "#about" },
  { name: "Master Plan", href: "#siteplan" },
  { name: "Gallery", href: "#gallery" },
  { name: "Our Services", href: "#services" },
  { name: "News Event", href: "#news" },
  { name: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 shadow bg-[#87633d]">
      <nav className="flex items-center justify-between px-4 md:px-12 py-3">
        {/* Logo & Brand */}
        <div className="flex items-center gap-2">
          <img
            src="https://ext.same-assets.com/993979730/3156024827.png"
            alt="King Architect Logo"
            className="h-10 w-auto"
          />
          <a
            href="#"
            className="text-2xl tracking-wider font-bold text-[#f5f2eb] uppercase font-dm-serif hover:text-[#e3c78f] transition-colors"
          >
            <span className="text-[#e3c78f]">KrishnaBhumi</span>
          </a>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 text-[#f5f2eb] font-medium text-base font-inter">
          {NAV_LINKS.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-[#e3c78f] transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Apply Now Button */}
        <div className="hidden md:block">
          <a
            href="#apply"
            className="bg-[#e3c78f] hover:bg-[#c8aa66] text-[#2d2f32] font-semibold rounded px-5 py-2 shadow transition-colors text-sm font-inter"
          >
            Apply Now
          </a>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#f5f2eb] focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-[#87633d] shadow-md">
          <ul className="flex flex-col gap-3 text-[#f5f2eb] font-inter text-base">
            {NAV_LINKS.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block py-1 px-2 rounded hover:bg-[#a17952] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#apply"
                className="block w-full text-center bg-[#e3c78f] hover:bg-[#c8aa66] text-[#2d2f32] font-semibold rounded px-5 py-2 transition-colors text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Apply Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
