import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  const { id, title, summary, thumbnail } = project;

  return (
    <article className="project-card">
      <Link
        to={`/project/${id}`}
        className="project-card__link"
        aria-label={`View ${title}`}
      >
        <div className="project-card__body">
          <h3 className="project-card__title">{title}</h3>
          <p className="project-card__summary">{summary}</p>
        </div>

        <div className="project-card__image-wrap">
          <img
            src={thumbnail}
            alt={title}
            className="project-card__image"
            loading="lazy"
          />
          <div className="project-card__overlay">
            <span className="project-card__cta">View Project</span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default ProjectCard;