import React from 'react';
import ImageCarousel from './ImageCarousel';  // Add this import

function ProjectDetail({ project }) {
  const { title, description, images, tags, url, github, impact } = project;

  // Ensure description is always an array
  const descriptionArray = Array.isArray(description) ? description : [description];

  return (
    <div className="project-page__inner">

      <div className="project-page__hero">
        <h1 className="project-page__title">{title}</h1>

        <div className="project-page__links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              GitHub
            </a>
          )}
          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
              Live Site
            </a>
          )}
        </div>

        <ImageCarousel images={images} title={title} />

        {tags && tags.length > 0 && (
          <ul className="project-page__tags" aria-label="Technologies used">
            <li className="project-page__tags-label">Build:</li>
            {tags.map(tag => (
              <li key={tag} className="project-page__tag">{tag}</li>
            ))}
          </ul>
        )}
      </div>

      <hr />

      <div className={`project-page__body ${impact && impact.length > 0 ? 'has-metrics' : ''}`}>
          <div className="project-page__description">
              <h2>Project Info</h2>
              <div className="project-page__description-content">
                  {descriptionArray.map((para, i) => (
                      <p key={i}>{para}</p>
                  ))}
              </div>
          </div>

          {impact && impact.length > 0 && (
              <div className="project-page__metrics">
                  <h2>Impact</h2>
                  <div className="project-page__metrics-container">
                      {impact.map((metric, i) => (
                          <div key={i} className="project-page__metric">
                              <h3>{metric.value}</h3>
                              <span>{metric.title}</span>
                          </div>
                      ))}
                  </div>
              </div>
          )}
      </div>

    </div>
  );
}

export default ProjectDetail;