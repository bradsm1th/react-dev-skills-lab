import SkillListItem from "./SkillListItem";

// the default component
export default function SkillList() {

  // return UI as JSX
  return (
    <ul>
      <SkillListItem />
      <SkillListItem />
      <SkillListItem />
    </ul>
  )
}