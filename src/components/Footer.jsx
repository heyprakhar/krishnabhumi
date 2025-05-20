import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#8e6136] text-white pt-12 pb-4 font-inter">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-10 md:gap-16 justify-between items-start">
        {/* Logo and summary */}
        <div className="flex-1 flex flex-col gap-4 min-w-[200px]">
          <div className="flex items-center gap-2 mb-2">
            <img
              src="https://ext.same-assets.com/993979730/3156024827.png"
              alt="King Architect Logo"
              className="h-9 w-auto"
            />
            <span className="text-xl tracking-wider font-bold uppercase font-dm-serif">
              King<span className="text-[#ddcca8]">Architect</span>
            </span>
          </div>
          <div className="text-sm text-[#f9f8f7] mb-2 max-w-xs">
            Surround yourself with fresh energy, high-tech amenities, and
            elevated style. Indulge in extraordinary amenities, relax in
            appealing social spaces.
          </div>
          <div className="flex gap-3 mt-2">
            <span className="w-6 h-6 bg-[#a18c5d] rounded-full flex items-center justify-center"></span>
            <span className="w-6 h-6 bg-[#a18c5d] rounded-full flex items-center justify-center"></span>
            <span className="w-6 h-6 bg-[#a18c5d] rounded-full flex items-center justify-center"></span>
          </div>
        </div>

        {/* Contact info */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="font-semibold text-lg mb-3 font-dm-serif">
            Contact Us
          </h4>
          <ul className="text-sm space-y-2">
            <li>
              <span className="font-bold">Address</span>: 1st Floor, 123 West
              Street, Melbourne Victoria 3000 Australia
            </li>
            <li>
              <span className="font-bold">Call :-</span> 0800-123456
            </li>
            <li>
              <span className="font-bold">Board line :-</span> 0123-4567890
            </li>
          </ul>
        </div>

        {/* Business channels */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="font-semibold text-lg mb-3 font-dm-serif">
            Our Business Channels
          </h4>
          <div className="flex gap-3 flex-wrap items-center">
            <img
              src="https://ext.same-assets.com/993979730/2010136307.png"
              alt="Channel 1"
              className="w-14 h-12 object-contain"
            />
            <img
              src="https://ext.same-assets.com/993979730/2010136307.png"
              alt="Channel 2"
              className="w-14 h-12 object-contain"
            />
            <img
              src="https://ext.same-assets.com/993979730/2010136307.png"
              alt="Channel 3"
              className="w-14 h-12 object-contain"
            />
            <img
              src="https://ext.same-assets.com/993979730/2010136307.png"
              alt="Channel 4"
              className="w-14 h-12 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#b7a69c] mt-8 pt-3 text-[#f9f8f7] text-sm flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4 gap-2">
        <span>©️ {currentYear} KingArchitect. All Right Reserved</span>
        <div className="flex gap-6 text-[#ddcca8] text-sm mt-1 md:mt-0">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#contact" className="hover:underline">
            Contact Us
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
