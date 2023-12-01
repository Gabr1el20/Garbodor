import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'


const App = () => {
  const [notes, setNotes] = useState([])


  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setNotes(response.data)
      })
  }, [])

  return (
    <ul>
      <Note notes={notes}/>
    </ul>
  )
}

export default App