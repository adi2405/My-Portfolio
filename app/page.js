import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import StarField from "./components/StarField";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <StarField />
      <main className="relative flex flex-col min-h-screen z-10">
        <Navbar/>
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection/>
          <AchievementsSection/>
          <AboutSection/>
          <ProjectsSection/>
          <EmailSection/>
        </div>
        <Footer/>
      </main>
    </div>
  )
}