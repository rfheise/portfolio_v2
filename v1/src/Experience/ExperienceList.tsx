import Experience from './Experience';
import { experience } from './ExperienceData';

export default function ExperienceList() {
  return (
    <div className="block">
      <div className="section-head">
        <div className="section-title">
          <h2>Professional Experience</h2>
        </div>
      </div>

      <div className="timeline" aria-label="Experience timeline">
        {experience.map((item) => (
          <Experience key={`${item.title}-${item.company}-${item.date}`} {...item} />
        ))}
      </div>
    </div>
  );
}
