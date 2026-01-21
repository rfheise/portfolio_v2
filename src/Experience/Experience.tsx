import { ExperienceData } from './ExperienceData';

export default function Experience(props: ExperienceData) {
  return (
    <article className="timeline-item">
      <div className="timeline-rail" aria-hidden="true">
        <div className="timeline-dot" />
      </div>
      <div className="timeline-card">
        <header className="timeline-head">
          <div>
            <h3 className="timeline-role">{props.title}</h3>
            {(props.company || props.location) && (
              <p className="timeline-meta">
                {props.company && <span className="timeline-meta-part">{props.company}</span>}
                {props.company && props.location && (
                  <span className="timeline-meta-sep" aria-hidden="true">
                    {' '}
                    •{' '}
                  </span>
                )}
                {props.location && <span className="timeline-meta-part">{props.location}</span>}
              </p>
            )}
          </div>
          <div className="timeline-date" aria-label="Dates">
            {props.date}
          </div>
        </header>

        <ul className="timeline-notes">
          {props.about.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
