import { SkillData } from "./SkillData"

export default function Skill(props:SkillData) {
    return (
        <span className="chip">{props.name}</span>
    )
}
