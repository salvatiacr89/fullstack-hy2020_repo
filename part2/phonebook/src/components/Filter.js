

const Filter = ({ filter, handleFilterChange }) => {
  console.log('Entered the filter component')
  return (
    <div>
    filter shown with <input value={filter} onChange={handleFilterChange} />
    </div>
  )

}

export default Filter
