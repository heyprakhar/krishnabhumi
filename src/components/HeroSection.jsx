import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import car1 from "../assets/pic44.jpeg"; // bg1
import car2 from "../assets/carousel1.jpeg";
import car3 from "../assets/carousel2.jpeg"; // bg2
import car4 from "../assets/carousel3.jpeg"; // bg3
import car5 from "../assets/carousel44.jpeg"; // bg4
import car6 from "../assets/carousel5.jpeg"; // bg5

const images = [car1, car2, car3, car4, car5, car6];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-[#f9f8f7] min-h-[540px] flex flex-col justify-center items-stretch overflow-hidden pb-6">
      {/* Carousel */}
      <div className="relative w-full h-[260px] sm:h-[300px] md:h-[430px]">
        <AnimatePresence>
          <motion.img
            key={index}
            src={images[index]}
            alt={`Slide ${index + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full object-cover object-center shadow-lg"
          />
        </AnimatePresence>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-[#8e6136] hover:bg-[#a18c5d] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition"
        >
          <svg
            className="w-6 h-6 rotate-180"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-[#8e6136] hover:bg-[#a18c5d] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* CTA */}
      <div className="absolute top-1/2 left-4 sm:left-6 md:left-16 -translate-y-1/2 flex flex-col gap-4 sm:gap-5 max-w-[90%] sm:max-w-[400px] md:max-w-[470px] z-10">
        <a
          href="#book-visit"
          className="inline-block w-fit px-6 sm:px-8 py-2.5 sm:py-3 bg-[#8e6136] hover:bg-[#a18c5d] text-white font-semibold rounded shadow text-sm sm:text-base uppercase tracking-wide transition-colors border-2 border-[#8e6136] hover:border-[#a18c5d] font-inter"
        >
          Book A Site Visit
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
