import React from "react";
import bgsiteplan from "../assets/pic22.jpeg";

const SitePlanMasterPlanSection = () => {
  const planTypes = [
    "40 x 90 East",
    "35 x 70 East",
    "35 x 70 West",
    "Master Plan",
    "50 x 100 East",
    "40 x 70 East",
  ];

  return (
    <section
      id="siteplan"
      className="relative py-12 sm:py-14 md:py-20 bg-white overflow-hidden"
    >
      {/* Faded background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgsiteplan}
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12 md:gap-16 items-start">
        {/* Left: Plans List */}
        <div className="w-full md:w-2/5 flex flex-col gap-5">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-[#2d2f32] font-dm-serif">
            Site Plan & Master Plan
          </h2>
          <p className="text-sm sm:text-base text-[#939698] font-inter">
            With premium finishes and wide-open spaces, each floor plan brings
            you unparalleled luxury without sacrificing on comfort. Floor plans
            are artist renderings. All dimensions are approximate.
          </p>
          <div className="flex flex-wrap gap-2 mt-2 mb-5">
            {planTypes.map((item) => (
              <span
                key={item}
                className="inline-block bg-[#f9f8f7] border border-[#c2c8cc] rounded-full px-4 py-1 text-xs text-[#8e6136] font-semibold cursor-pointer hover:bg-[#ede1d8] transition-colors font-inter"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Highlighted Plan Block */}
          <div className="bg-[#f9f8f7] border rounded-xl px-5 py-4 w-full shadow-sm mb-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
              <div className="text-xl sm:text-2xl font-bold text-[#a18c5d] font-dm-serif">
                39.7 Lac
              </div>
              <div className="text-sm text-[#8e6136] text-left sm:text-right font-inter mt-1 sm:mt-0">
                2 BHK Type-1 Unit Plan,
                <br />
                <span className="text-[#b7a69c]">SBUA = 1125.25 SQ.FT</span>
              </div>
            </div>
            <div className="text-xs text-[#939698] mb-3 font-inter leading-relaxed">
              USP: Reduced energy usage and costs, reduced water usage through
              low-flow fixtures, improved indoor air quality through the usage
              of low.
            </div>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs font-bold mb-3 font-inter">
              <div className="flex items-center gap-2">
                <span className="text-[#a18c5d] text-lg font-dm-serif">
                  1814.73
                </span>{" "}
                Sq. Feet
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#a18c5d] text-lg font-dm-serif">02</span>{" "}
                Bathrooms
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#a18c5d] text-lg font-dm-serif">03</span>{" "}
                Bedrooms
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#a18c5d] text-lg font-dm-serif">02</span>{" "}
                Balcony
              </div>
            </div>
            <a
              href="tel:0800-123456"
              className="inline-block mt-2 px-4 py-2 border border-[#8e6136] text-[#8e6136] hover:bg-[#8e6136] hover:text-white transition-colors rounded-full text-sm font-semibold font-inter"
            >
              0800-123456
            </a>
          </div>
        </div>

        {/* Right: Plan Image */}
        <div className="w-full md:w-3/5 flex justify-center">
          <img
            src="https://ext.same-assets.com/993979730/4017029983.jpeg"
            alt="Site Plan"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg rounded-lg border transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default SitePlanMasterPlanSection;
