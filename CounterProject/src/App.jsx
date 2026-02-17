import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    console.log("Clicked!")
    setCounter(counter+1)
  }

  const removeValue = () => {
    console.log("Clicked")
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Chai React</h1>
      <h2>Counter value: {counter}</h2> 
      <button
      onClick={addValue}>Add Value</button>
      <br />
      <button
      onClick={removeValue}>Remove Value</button> 
    </>
  )
}

export default App