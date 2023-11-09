import { useState } from 'react';
import './NewSkillListForm.css'

// the default component
export default function NewSkillForm({ addSkill }) {
  const [skillData, setSkillData] = useState({
    name: "",
    level: 3
  })

  function handleAddSkill(evt) {
    evt.preventDefault()
    addSkill(skillData)
    setSkillData({
      name: "",
        level: 3
    });
  }

  return (
    <form onSubmit={handleAddSkill} className="NewSkillForm">
      <label>
        Skill
      </label>
      <input
        value={skillData.name}
        type="text"
        placeholder="New Skill…"
        name='name'
        onChange={(evt) => setSkillData({
          ...skillData,
          [evt.target.name]: evt.target.value
        })} />
      <label>Level
      </label>
      <select
        value={skillData.level}
        type="text"
        onChange={(evt) => setSkillData({
          ...skillData,
          [evt.target.name]: evt.target.value
        })}
        name='level'>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button type="submit">ADD SKILL</button>
    </form>
  )
}