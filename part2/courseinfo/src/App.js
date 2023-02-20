
import Course from './components/Course'



const Header = (props) => {
  console.log();
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
    < Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
    < Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
    < Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}


const App = () => {
    const courses = [
      {
        id: 1,
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10, 
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7, 
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14, 
            id: 3
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      },
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]
    //return <Course course={course} />
    return (
      <div>
        {courses.map(course => <Course key={course.id} course={course} />)}
      </div>
    )
}

export default App;
