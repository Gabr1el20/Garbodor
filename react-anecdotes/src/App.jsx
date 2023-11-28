import { useState } from "react"

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))
  console.log(votes)
  const handleRandom = () => {
    setSelected(Math.floor(Math.random() * (anecdotes.length -1)))
  }


  const handleVotes = (selectedAnecdote) =>{
    const copy = [...votes]
    copy[selectedAnecdote] += 1
    setVotes(copy)
  }

  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <p style={{textAlign: 'center'}}>{anecdotes[selected]}</p>
      <button onClick={handleRandom}>Next anecdote</button>
      <button onClick={() => handleVotes(selected)}>Vote for this anecdote</button>
    </div>
    <h2>Anecode with most votes</h2>
    <small>{anecdotes[votes.indexOf(Math.max(...votes))]}</small>
    </>
  )
}

export default App