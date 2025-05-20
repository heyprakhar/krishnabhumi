import React from "react";
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
  return (
    <div className="bg-[#f9f8f7] min-h-screen font-inter">
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
