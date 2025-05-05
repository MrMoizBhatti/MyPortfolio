import React, { useEffect } from 'react'
import HeroSection from './components/Home/HeroSection';
import AboutSection from './components/About/AboutSection';
import ResearchSection from './components/Research/ResearchSeaction';
import ProjectsSection from './components/Projects/ProjectsSection';
import BlogSection from './components/Blog/BlogSection';
import ContactSection from './components/Contact/ContactSection';
import ResumeSection from './components/Resume/ResumeSection';
import Layout from './components/Layout/Layout';

const index = () => {
  useEffect(() => {
    // Update the document title
    document.title = "AI Researcher Portfolio";

    // Update the favicon to a more appropriate icon if desired
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      // Keep the default Vite favicon for now
    }
  }, []);
  return (
    <div>
      <Layout>
        <HeroSection />
        <AboutSection />
        <ResearchSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
        <ResumeSection />
      </Layout>
    </div>
  )
}

export default index;
