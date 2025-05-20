import React from "react";
import bg1 from "../assets/pic44.jpeg";

const HeroSection = () => {
  return (
    <section className="relative bg-[#f9f8f7] min-h-[540px] flex flex-col justify-center items-stretch overflow-x-hidden pb-6">
      {/* Hero Image */}
      <img
        src={bg1}
        alt="Modern Houses"
        className="w-full h-[260px] sm:h-[300px] md:h-[430px] object-cover object-center shadow-lg"
      />

      {/* Overlay: Headline + CTA */}
      <div className="absolute top-1/2 left-4 sm:left-6 md:left-16 -translate-y-1/2 flex flex-col gap-4 sm:gap-5 max-w-[90%] sm:max-w-[400px] md:max-w-[470px]">
        {/* Optional Heading */}
        {/* <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase text-[#2d2f32] drop-shadow font-dm-serif leading-tight">
          Helping you and your <br />
          house become better <br />
          acquainted
        </h1> */}
        <a
          href="#book-visit"
          className="inline-block w-fit px-6 sm:px-8 py-2.5 sm:py-3 bg-[#8e6136] hover:bg-[#a18c5d] text-white font-semibold rounded shadow text-sm sm:text-base uppercase tracking-wide transition-colors border-2 border-[#8e6136] hover:border-[#a18c5d] font-inter"
        >
          Book A Site Visit
        </a>
      </div>

      {/* Floating CTA Icons */}
      {/* <div className="absolute right-4 sm:right-6 top-20 sm:top-24 flex flex-col items-center gap-3 sm:gap-4">
        <button className="rounded-full bg-white bg-opacity-60 p-2 shadow hover:scale-105 transition-transform border border-[#c2c8cc]">
          <svg width="24" height="24" fill="#8e6136" viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="#8e6136"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="12" cy="12" r="3.5" fill="#8e6136" />
          </svg>
        </button>
        <button className="rounded-full bg-white bg-opacity-60 p-2 shadow hover:scale-105 transition-transform border border-[#c2c8cc]">
          <svg width="24" height="24" fill="#8e6136" viewBox="0 0 24 24">
            <path
              d="M12 6v6l4 2"
              stroke="#8e6136"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </button>
      </div> */}

      {/* Optional Thumbnails (visible only on md+) */}
      <div className="hidden md:flex w-full absolute left-0 top-[78%] px-16 gap-4 justify-center z-10">
        {/* Example Thumbnail
        <div className="w-56 h-32 bg-white/70 border rounded shadow overflow-hidden flex flex-col items-center justify-center">
          <img
            src="https://ext.same-assets.com/993979730/3064374608.jpeg"
            alt="Club House"
            className="h-20 object-cover"
          />
          <span className="text-xs mt-2 font-semibold text-[#8e6136] font-inter">
            Club House
          </span>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
