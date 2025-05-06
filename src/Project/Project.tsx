import {ProjectData} from "./ProjectData"

export default function Project(props:ProjectData) {
    return (
        <div className="project-card">
                <div className="project-img">
                    <img src={props.img} alt={props.img_alt} />
                </div>
                <div className="project-content">
                    <h3 className="project-title">{props.name}</h3>
                    <p className="project-description">{props.about}</p>
                    <div className="project-links">
                        <a href="#" className="cyber-btn" target="_blank">{props.github}</a>
                        <a href="#" className="cyber-btn cyber-btn-secondary" target="_blank">{props.demo}</a>
                    </div>
                </div>
            </div>

    )
    
}