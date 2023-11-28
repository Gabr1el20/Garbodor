import { useState } from "react"

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)

  const handleRandom = () => {
    setSelected(Math.floor(Math.random() * (anecdotes.length -1)))
  }

  return (
    <div>
      {anecdotes[selected]}
      <button onClick={handleRandom}>Next anecdote</button>
    </div>
  )
}

export default App