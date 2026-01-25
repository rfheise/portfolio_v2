import { ProjectData } from './ProjectData';
import Image from 'next/image'

export default function Project(props: ProjectData) {
  return (
    <article className="card">
      <div className="card-media" aria-hidden="true">
        <Image src={props.img} alt={props.img_alt} />
        <div className="card-media-glow" />
      </div>
      <div className="card-body">
        <header className="card-head">
          <h3 className="card-title">{props.name}</h3>
          <p className="card-tech">{props.tech}</p>
        </header>
        <p className="card-desc">{props.about}</p>
        <div className="card-actions">
          {props.github && (
            <a className="btn btn-small btn-primary" href={props.github} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
          )}
          {props.demo && (
            <a className="btn btn-small btn-secondary" href={props.demo} target="_blank" rel="noreferrer noopener">
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
