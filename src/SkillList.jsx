import SkillListItem from "./SkillListItem";
import './SkillList.css'

// the default component
export default function SkillList({passedSkills}) {

  // return UI as JSX
  return (
    <ul className="teal-text">
      {passedSkills.map((skillObj, idx) => <SkillListItem 
        skill={skillObj} 
        key={idx} 
        index={idx}
        />)}
    </ul>
  )
}