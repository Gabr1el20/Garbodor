import { useState } from 'react'

const Persons = ({ personsFiltered }) => {
  return (
    <ul>
      {personsFiltered.map(
        person => <li key={person.name}>{person.name} {person.number}</li>
      )}
      </ul>
  )
}

const Filter = ({ searchTerms, handleSearchResults }) => {
  return (
    <input 
    value={searchTerms}
    onChange={handleSearchResults}
    />
  )
}

const PersonForm = ({ handleSubmit, newName, handleNameChange, newNumber, handleNumberChange }) => {
  return (
    <form onSubmit={handleSubmit}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange} />
        </div>
        <div>
          number: <input 
          value={newNumber}
          onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [searchTerms, setSearchTerms] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const handleSearchResults = (e) => {
    const value = e.target.value
    setSearchTerms(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.map(person => person.name).includes(newName)) {
      alert(`${newName} is already added to the phonebook`)
      return 
    }
    const newPerson = {
      name: newName,
      number: newNumber
    }
    setPersons(prevNames => [...prevNames, newPerson])
    setNewName('')
    setNewNumber('')
  }

  const filteredPersons = persons.filter(
    person => person.name.toLowerCase().includes(searchTerms.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchTerms={searchTerms} handleSearchResults={handleSearchResults}/>
      <h3>Add a new</h3>
      <PersonForm handleSubmit={handleSubmit} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons personsFiltered={filteredPersons}/>
    </div>
  )
}

export default App