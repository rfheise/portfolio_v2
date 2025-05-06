import Skill from './Skill'
import {frameworks, languages} from './SkillData'

export default function Skills() {
    return (
        <section className="skills active">
        <div className= "skill-header-div">
        <h3 className='skill-header'>
        Languages
        </h3>
        </div>
        <div className="skills-container">
            {languages.map(x => (<Skill name= {x}/>))}
        </div>
        <div className= "skill-header-div">
        <h3 className='skill-header'>
            Technologies & Frameworks
        </h3>
        </div>
        <div className="skills-container">
            {frameworks.map(x => (<Skill name= {x}/>))}
        </div>
    </section>
    )
}