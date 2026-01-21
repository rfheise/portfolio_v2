import Project from "./Project"
import {projects} from "./ProjectData"

export default function ExperienceList() {
    return (
        <section id="projects" className="projects reveal">
        <h2>Personal Projects</h2>
        
        <div className="projects-grid">
            {projects.map(x => <Project {...x}/>)}
        </div>
        </section>
    )
}
