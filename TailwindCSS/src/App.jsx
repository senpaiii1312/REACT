import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-green-400">TailwindCSS Test</h1>

      <Card username="Sujal" btn_text="About me"/>
      <Card username="Shreya" btn_text="My Intro"/>
    

    </>
  )
}

export default App
