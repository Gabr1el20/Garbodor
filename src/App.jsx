
const Header = ({ course }) => <h1>{course}</h1>

function Content({ parts }) {
  return (
    <>
    {parts.map(part => <p key={part.name}>{part.name} {part.exercises}</p>)}
    </>
  )
}

const Total = ({parts}) => {
  const exercisesArray = parts.map(part => part.exercises)
  const totalExercises = exercisesArray.reduce((total, current) => total + current, 0)
  return (
    <p>Number of exercises {totalExercises}</p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App