import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "./index.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SpecificationsSection from "./components/SpecificationsSection";
import SitePlanMasterPlanSection from "./components/SitePlanMasterPlanSection";
import BuildingServicesSection from "./components/BuildingServicesSection";
import ProjectsOverviewSection from "./components/ProjectsOverviewSection";
import NewsEventSection from "./components/NewsEventSection";
import Footer from "./components/Footer";

export default function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08, // adjust for smoothness
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="bg-[#f9f8f7] font-inter"
    >
      <Navbar />
      <HeroSection />
      <SpecificationsSection />
      <SitePlanMasterPlanSection />
      <BuildingServicesSection />
      <ProjectsOverviewSection />
      <NewsEventSection />
      <Footer />
    </div>
  );
}
