import Project from './Project';
import { projects } from './ProjectData';

export default function ProjectList() {
  return (
    <div className="block">
      <div className="section-head">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
      </div>

      <div className="cards" aria-label="Projects">
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
}
