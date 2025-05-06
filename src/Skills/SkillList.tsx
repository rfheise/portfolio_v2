import Skill from './Skill'
import {skill_data} from './SkillData'

export default function Skills() {
    return (
        <section className="skills active">
        <h2>Skills</h2>
        
        <div className="skills-container">
            {skill_data.map(x => (<Skill name= {x}/>))}
        </div>
    </section>
    )
}