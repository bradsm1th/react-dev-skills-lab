import SkillListItem from "./SkillListItem";

// the default component
export default function SkillList({passedSkills}) {

  // return UI as JSX
  return (
    <ul>
      {passedSkills.map((skillObj, idx) => <SkillListItem skill={skillObj} index={idx}/>)}
    </ul>
  )
}