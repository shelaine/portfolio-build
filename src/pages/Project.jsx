import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';
import ProjectDetail from '../components/ProjectDetail';
import ProjectCard from '../components/ProjectCard';
import ScrollToTop from "../components/ScrollToTop";


function getRelated(current, all, limit = 2) {
  return all
    .filter(p => p.id !== current.id)
    .map(p => ({
      ...p,
      sharedCategory: (p.category || []).filter(t => (current.category || []).includes(t)).length
    }))
    .filter(p => p.sharedCategory > 0)
    .sort((a, b) => b.sharedCategory - a.sharedCategory)
    .slice(0, limit);
}

function Project() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <p>Project not found.</p>;

  const related = getRelated(project, projects);

  return (
    <div className="project-page">
      <ScrollToTop />

      <header className="project-page__header">
        <Link to="/">
          <div className="project-page__logo">
            <img src="/logo-minimal.svg" alt="Shelaine Roustio Flower Logo" />
            Shelaine Roustio
          </div>
        </Link>
        <nav className="project-page__nav">
          <Link to="/" className="btn btn--secondary">Home</Link>
          <a href="mailto:shelaineroustio@gmail.com" className="btn btn--primary-outline">Contact</a>
        </nav>
      </header>

      <ProjectDetail project={project} />

      <hr />

      {related.length > 0 && (
        <div className="project-page__related">
          <h2>Related Projects</h2>
          <div className="project-page__related-container">
            {related.map(p => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

export default Project;