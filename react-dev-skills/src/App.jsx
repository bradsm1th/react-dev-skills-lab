import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import SkillList from "./SkillList";
import NewSkillForm from "./NewSkillForm";


function App() {

  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList />
      <hr />
      <NewSkillForm />
    </div>
  )
}

export default App
