import Experience from "./Experience"
import {experience} from "./ExperienceData"

export default function ExperienceList() {
    return (
        <section className="experience active">
        <h2>Professional Experience</h2>
        {experience.map(
            x => (<Experience key = {x.company} {...x} />)
        )}
        </section>
    )
}