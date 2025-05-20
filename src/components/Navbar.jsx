import React from "react";

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
  return (
    <header className="sticky top-0 z-30 shadow bg-white">
      <nav className="flex items-center justify-between px-4 md:px-12 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://ext.same-assets.com/993979730/3156024827.png"
            alt="King Architect Logo"
            className="h-10 w-auto"
          />
          <span className="text-2xl tracking-wider font-bold text-[#8e6136] uppercase font-dm-serif">
            <span className="text-[#a18c5d]">KrishnaBhumi</span>
          </span>
        </div>
        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 text-[#2d2f32] font-medium text-base font-inter">
          {NAV_LINKS.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-[#8e6136] transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Apply Now Button */}
        <a
          href="#apply"
          className="bg-[#8e6136] hover:bg-[#a18c5d] text-white font-semibold rounded px-5 py-2 shadow transition-colors text-sm font-inter"
        >
          Apply Now
        </a>
        {/* Mobile Nav (Hamburger) */}
        <div className="md:hidden">
          <button
            className="text-[#8e6136] focus:outline-none"
            aria-label="Open menu"
          >
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M2.5 6h15M2.5 10h15M2.5 14h15"
                stroke="#8e6136"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
