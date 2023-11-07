import './SkillListItem.css'

// the default component
export default function SkillListItem({skill, index}) {
  return (
    <li key={index}> 
      {skill.name} 
      <span className="level">{skill.level}</span>
    </li>
  )
}