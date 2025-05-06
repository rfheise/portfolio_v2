import {ProjectData} from "./ProjectData"

export default function Project(props:ProjectData) {
    return (
        <div className="project-card">
                <div className="project-img">
                    <img src={props.img} alt={props.img_alt} />
                </div>
                <div className="project-content">
                    <h3 className="project-title">{props.name}</h3>
                    <p className ="date" style = {{"textAlign":"center"}}>{props.tech}</p>
                    <p className="project-description">{props.about}</p>
                    <div className="project-links">
                        {props.github &&
                        <a href={props.github} className="cyber-btn" target="_blank">Github</a>
                        }
                        {
                            props.demo &&
                            <a href={props.demo} className="cyber-btn cyber-btn-secondary" target="_blank">Demo</a>
                        }
                        
                    </div>
                </div>
            </div>

    )
    
}