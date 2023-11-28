const Title = ({ courseName }) => <h1>{courseName}</h1>

const Content = ({ parts }) => {
  return (
    <ul>
    {parts.map(
      part => <li key={part.id}>{part.name} {part.exercises}</li>
    )}
    </ul>
  )
}

const Course = ({ course }) => {
  return (<>
  <Title courseName={course.name}/>
  <Content parts={course.parts}/>
  </>
  )
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'Next.js',
        exercises: 20,
        id: 4,
      },
      {
        name: 'Redux',
        exercises: 5,
        id: 5,
      },
    ],
  }

  return <Course course={course} />
}

export default App