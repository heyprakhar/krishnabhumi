import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NewsEventSection = () => {
  const newsEvents = [
    {
      img: "https://ext.same-assets.com/993979730/151838170.jpeg",
      date: "March 29, 2020",
      author: "Deo Admin",
      title: "How Roofing Charge for Their Services Asking the Right Questions",
      excerpt:
        "The goal of this new editor is to make adding rich content to WordPress simple and enjoyable.",
      link: "#",
    },
    {
      img: "https://ext.same-assets.com/993979730/305870256.jpeg",
      date: "March 29, 2020",
      author: "Deo Admin",
      title: "How Roofing Charge for Their Services Asking the Right Questions",
      excerpt:
        "The goal of this new editor is to make adding rich content to WordPress simple and enjoyable.",
      link: "#",
    },
    {
      img: "https://ext.same-assets.com/993979730/305870256.jpeg",
      date: "March 29, 2020",
      author: "Deo Admin",
      title: "How Roofing Charge for Their Services Asking the Right Questions",
      excerpt:
        "The goal of this new editor is to make adding rich content to WordPress simple and enjoyable.",
      link: "#",
    },
    {
      img: "https://ext.same-assets.com/993979730/305870256.jpeg",
      date: "March 29, 2020",
      author: "Deo Admin",
      title: "How Roofing Charge for Their Services Asking the Right Questions",
      excerpt:
        "The goal of this new editor is to make adding rich content to WordPress simple and enjoyable.",
      link: "#",
    },
    {
      img: "https://ext.same-assets.com/993979730/979530461.jpeg",
      date: "March 29, 2020",
      author: "Deo Admin",
      title: "How Roofing Charge for Their Services Asking the Right Questions",
      excerpt:
        "The goal of this new editor is to make adding rich content to WordPress simple and enjoyable.",
      link: "#",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? newsEvents.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === newsEvents.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="news" className="relative bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold uppercase text-[#2d2f32] mb-2 font-dm-serif">
              News & Event
            </h2>
            <p className="text-[#939698] max-w-2xl text-sm sm:text-base font-inter">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
          </div>
          <a
            href="#"
            className="inline-block bg-[#8e6136] hover:bg-[#a18c5d] text-white font-medium py-2 px-6 rounded shadow text-xs uppercase tracking-wide transition-colors border-2 border-[#8e6136] hover:border-[#a18c5d] font-inter"
          >
            View All Posts
          </a>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 bg-[#8e6136] hover:bg-[#a18c5d] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition"
            aria-label="Previous Slide"
          >
            <svg
              className="w-6 h-6 rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Sliding Track */}
          <div className="overflow-hidden w-full max-w-5xl">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${current * (300 + 24)}px` }} // 300px width + 24px gap
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ width: `${newsEvents.length * 324}px` }}
            >
              {newsEvents.map((item, index) => (
                <div
                  key={index}
                  className={`w-[300px] flex-shrink-0 border rounded-2xl shadow-lg flex flex-col h-full bg-[#f9f8f7]`}
                >
                  <div className="w-full aspect-video overflow-hidden rounded-t-2xl">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-5 flex flex-col">
                    <div className="flex items-center justify-between text-xs text-[#b7a69c] mb-2 font-inter">
                      <span>{item.date}</span>
                      <span>
                        By <span className="text-[#8e6136]">{item.author}</span>
                      </span>
                    </div>
                    <a
                      href={item.link}
                      className="font-semibold text-base text-[#2d2f32] leading-tight mb-2 line-clamp-2 font-inter"
                    >
                      {item.title}
                    </a>
                    <div className="text-sm text-[#939698] mb-4 line-clamp-3 font-inter">
                      {item.excerpt}
                    </div>
                    <a
                      href={item.link}
                      className="mt-auto inline-flex items-center text-[#8e6136] font-semibold text-sm hover:underline font-inter"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 bg-[#8e6136] hover:bg-[#a18c5d] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition"
            aria-label="Next Slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsEventSection;