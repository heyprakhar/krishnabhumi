import React from "react";
import bgbuilding from "../assets/pic33.jpeg";

const BuildingServicesSection = () => {
  const services = [
    {
      label: "24 HRS. Water Supply",
      img: "https://ext.same-assets.com/993979730/978028508.jpeg",
    },
    {
      label: "CCTV With Intercom",
      img: "https://ext.same-assets.com/993979730/1748967405.jpeg",
    },
    {
      label: "Power Backup",
      img: "https://ext.same-assets.com/993979730/1748967405.jpeg",
    },
    {
      label: "DTH Facility",
      img: "https://ext.same-assets.com/993979730/2806788398.jpeg",
    },
    {
      label: "Rain Water Harvesting",
      img: "https://ext.same-assets.com/993979730/541186772.jpeg",
    },
    {
      label: "Fully Automatic Lifts",
      img: "https://ext.same-assets.com/993979730/1748967405.jpeg",
    },
    {
      label: "Allotted Parking",
      img: "https://ext.same-assets.com/993979730/2806788398.jpeg",
    },
    {
      label: "Fire Fighting System",
      img: "https://ext.same-assets.com/993979730/541186772.jpeg",
    },
    {
      label: "Security",
      img: "https://ext.same-assets.com/993979730/2806788398.jpeg",
    },
    {
      label: "Tow Level Parking",
      img: "https://ext.same-assets.com/993979730/978028508.jpeg",
    },
  ];

  return (
    <section
      id="services"
      className="relative pt-14 pb-16 overflow-hidden"
      style={{
        backgroundImage: `url(${bgbuilding})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay to dim the image */}
      <div className="absolute inset-0 bg-white/75 backdrop-brightness-95 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#2d2f32] mb-3 font-dm-serif">
          Building & Services
        </h2>
        <p className="text-[#555] mb-8 max-w-2xl font-inter">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form
        </p>

        {/* Feature grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-10">
          {services.map(({ label, img }) => (
            <div
              key={label}
              className="bg-white border rounded-xl shadow flex flex-col items-center px-2 py-4 hover:shadow-lg transition-shadow"
            >
              <img
                src={img}
                alt={label}
                className="w-16 h-16 object-cover mb-3 rounded-lg border"
              />
              <div className="font-semibold text-[#8e6136] text-center mb-1 text-sm font-inter">
                {label}
              </div>
              <div className="text-xs text-[#939698] text-center font-inter">
                The KingArchitect is a collection of grand proportioned.
              </div>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="inline-block bg-[#8e6136] hover:bg-[#a18c5d] text-white font-medium py-2 px-6 rounded shadow text-xs uppercase tracking-wide transition-colors border-2 border-[#8e6136] hover:border-[#a18c5d] font-inter"
        >
          View All Services
        </a>
      </div>
    </section>
  );
};

export default BuildingServicesSection;
