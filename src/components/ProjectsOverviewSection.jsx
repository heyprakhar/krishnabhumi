import React from "react";

const ProjectsOverviewSection = () => {
  return (
    <section id="projects" className="relative bg-[#f9f8f7] py-14 md:py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
        {/* Left: Text content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold uppercase text-[#2d2f32] mb-2 font-dm-serif">
            Projects Overview
          </h2>
          <h3 className="uppercase text-[#a18c5d] text-base font-semibold mb-4 tracking-wider font-inter">
            See why our residents call our community home.
          </h3>
          <p className="mb-4 text-[#939698] font-inter">
            Surround yourself with fresh energy, high-tech amenities, and
            elevated style. Indulge in extraordinary amenities, relax in
            appealing social spaces, and cultivate your ideal life. We're the
            fresh look in this historic district - a vibrant new community for
            movers and shakers.
          </p>
          <p className="mb-7 text-[#939698] font-inter">
            A bold new life awaits you at KingArchitect, a brand new community
            of apartment homes situated at the cutting edge of modern design.
            Residents of KingArchitect enjoy luxury living with a sparkling
            swimming pool, fitness center and indoor game, parking garage and
            temple. Discover a KingArchitect from our convenient location.
            Nothing quite complements a comfortable, stylish home like an array
            of luxury amenities.
          </p>
          <a
            href="#about"
            className="inline-block bg-[#8e6136] hover:bg-[#a18c5d] border-2 border-[#8e6136] hover:border-[#a18c5d] text-white font-medium py-2 px-7 rounded shadow text-base uppercase tracking-wide transition-colors font-inter"
          >
            About Us
          </a>
        </div>
        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="https://ext.same-assets.com/993979730/3133901013.jpeg"
            alt="Projects Overview"
            className="rounded-xl shadow-lg border w-[330px] md:w-[94%] h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsOverviewSection;
