

const Persons = ({personsToShow}) => {
  
  console.log("Entered Persons component")
  return(
    <div>
      {personsToShow.map(entry => <p key={entry.name}>{entry.name} {entry.phone}</p>)}
    </div>
  )
}


export default Persons
