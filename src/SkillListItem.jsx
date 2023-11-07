// the default component
export default function SkillListItem({skill, index}) {
  return (
    <li key={index}>{skill.level} {skill.name}</li>
  )
}