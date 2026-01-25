import Skill from './Skill';
import { frameworks, languages } from './SkillData';

export default function SkillList() {
  return (
    <div className="block">
      <div className="section-head">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
      </div>

      <div className="skill-groups">
        <div className="skill-group">
          <h3 className="group-title">Languages</h3>
          <div className="chips">
            {languages.map((name) => (
              <Skill key={name} name={name} />
            ))}
          </div>
        </div>

        <div className="skill-group">
          <h3 className="group-title">Technologies &amp; Frameworks</h3>
          <div className="chips">
            {frameworks.map((name) => (
              <Skill key={name} name={name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
