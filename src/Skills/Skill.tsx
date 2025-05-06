import { SkillData } from "./SkillData"

export default function Skill(props:SkillData) {
    return (
        <span className="skill">{props.name}</span>
    )
}