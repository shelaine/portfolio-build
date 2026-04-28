import React from 'react';
import Sidebar from '../components/Sidebar';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import ScrollToTop from "../components/ScrollToTop";

function Home() {
  return (
    <div className="container">
      <ScrollToTop />
      <Sidebar />
      <main className="portfolio-projects">
        <div className="portfolio-inner">
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;