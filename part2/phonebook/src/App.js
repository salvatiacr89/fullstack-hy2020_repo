import {useState} from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', phone: '040-1234567', id: 1},
    {name: 'Ada Lovelace', phone: '39-44-5323523', id: 2},
    {name: 'Dan Abramov', phone: '12-43-234345', id: 3},
    {name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4}
  ])

  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addEntry = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    console.log('Button clicked: Value of newName', newName)
    // Part 2.7
    if(persons.some(person => person.name === newName)) {
      alert(newName + ' is already added to phonebook')
      return
    }

    const newNames = [...persons, {name: newName, phone: newPhoneNumber}]
    setPersons(newNames)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  
  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhoneNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const regex = new RegExp(filter, 'i')
  const personsToShow = filter.length === 0 ? persons : persons.filter(person => person.name.match(regex)) 

  return (
    <div className="App">
      <h2>Phonebook</h2>
        <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
        <PersonForm addEntry={addEntry} newName={newName} 
        handleNameChange={handleNameChange} newPhoneNumber={newPhoneNumber}
        handlePhoneChange={handlePhoneChange} />
      <h2>Numbers</h2>
        <Persons personsToShow={personsToShow}/>
    </div>
  );
}


export default App;
