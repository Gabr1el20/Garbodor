export const Title = ({ courseName }) => <h1>{courseName}</h1>

export const Content = ({ parts }) => {
  return (
    <ul>
    {parts.map(
      part => <li key={part.id}>{part.name} {part.exercises}</li>
    )}
    </ul>
  )
}

export const Total = ({ numberExercises }) => <b>Total of {numberExercises} exercises</b>

export const Course = ({ course }) => {
  const totalExercises = course.parts.reduce(
    (result, iterable) => result + iterable.exercises, 0
  )
  return (<>
  <Title courseName={course.name}/>
  <Content parts={course.parts}/>
  <Total numberExercises={totalExercises}/>
  </>
  )
}