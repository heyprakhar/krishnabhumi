import React from "react";

const SpecificationsSection = () => {
  const specifications = [
    {
      label: "Structure",
      content: "Earthquake resistant r.c.c frame structure for safety aspects.",
    },
    {
      label: "Exterior Finish",
      content: "Long lasting premium brands for exterior weather resistance.",
    },
    {
      label: "Door",
      content: "Premium laminated flush door with hardwood frames.",
    },
    {
      label: "Floor",
      content: "Vitrified tiles in living, kitchen, bedrooms and balconies.",
    },
    {
      label: "Kitchen",
      content: "Granite working platform with SS sink and designer tiles.",
    },
    {
      label: "Electrification",
      content: "Copper wire with modular switches and ample power points.",
    },
    {
      label: "Interior Finish",
      content: "Smooth finish with wall putty and plastic emulsion paint.",
    },
    {
      label: "Bathrooms & Plumbing",
      content: "Branded fittings, tiles in up to 7 feet, concealed plumbing.",
    },
    {
      label: "Water Supply",
      content: "24 hrs. water supply from overhead tank.",
    },
    { label: "Window", content: "UPVC/Aluminum sliding windows." },
  ];

  return (
    <section
      id="specifications"
      className="relative bg-white pt-12 pb-16 overflow-hidden"
    >
      {/* Large faint background text */}
      <span
        className="absolute left-4 top-8 text-[72px] md:text-[140px] font-bold text-[#ededed] uppercase tracking-wide z-0 pointer-events-none select-none opacity-60 font-dm-serif"
        style={{ letterSpacing: "5px", whiteSpace: "nowrap" }}
      >
        SPECIFICATIONS
      </span>

      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8 items-start">
        {/* Section image */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex items-center justify-center py-4">
          <img
            src="https://ext.same-assets.com/993979730/978028508.jpeg"
            alt="Specifications"
            className="rounded-lg shadow-lg w-[340px] h-[220px] object-cover border"
          />
        </div>

        {/* Right side: title, text, accordion */}
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#2d2f32] mb-2 font-dm-serif">
              Specifications
            </h2>
            <p className="text-[#939698] mb-4 max-w-lg font-inter">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
            <a
              href="#services"
              className="inline-block bg-[#8e6136] hover:bg-[#a18c5d] text-white font-medium py-2 px-6 rounded shadow text-xs uppercase tracking-wide transition-colors border-2 border-[#8e6136] hover:border-[#a18c5d] mb-2 font-inter"
            >
              View All Services
            </a>
          </div>

          {/* Accordion */}
          <div className="w-full divide-y rounded-lg bg-[#f9f8f7] border">
            {specifications.map((item, i) => (
              <details key={item.label} className="group p-0" open={i === 0}>
                <summary className="flex items-center justify-between cursor-pointer px-4 py-3 text-[#2d2f32] font-semibold group-open:bg-[#f4eadd] transition-colors font-inter">
                  <span>{item.label}</span>
                  <span className="ml-4 transition-transform group-open:rotate-90">
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="#8e6136"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-4 pb-3 text-[#939698] text-sm animate-fade-in-up font-inter">
                  {item.content}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecificationsSection;
