import {ExperienceData} from "./ExperienceData"

export default function Experience(props:ExperienceData) {
    return (
        <div className="experience-item">
            <h3>{props.title} at {props.company}</h3>
            <p className="date">{props.date}</p>
            {
                props.about.map(x => (<p key = {x}>{x}</p>))
            }
        </div>

    )
    
}