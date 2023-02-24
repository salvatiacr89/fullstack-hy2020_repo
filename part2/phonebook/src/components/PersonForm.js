  
const PersonForm = ({addEntry, newName, handleNameChange, 
                    newPhoneNumber, handlePhoneChange}) => {
  console.log("Entered person form component")
  return (
    <form onSubmit={addEntry}>
      <div>
        name:<input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newPhoneNumber} onChange={handlePhoneChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm

