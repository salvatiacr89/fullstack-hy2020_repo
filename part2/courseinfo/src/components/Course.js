

const Course = ({ course }) => {

  console.log("Value of course within the component ", course)
  console.log("Value of course.parts within the component ", course.parts)
  const totalExercises = course.parts.reduce( (partialSum, part) => partialSum + part.exercises, 0)
  console.log("Value of course.parts and exercises within the component ", totalExercises)
  return (
    <div>
      <h2 key={course.info}>{course.name}</h2>
      {course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
      <b>total of {totalExercises} exercises</b>
    </div>
  )
}

export default Course
