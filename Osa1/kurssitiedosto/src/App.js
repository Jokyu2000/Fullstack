import React from 'react';

const Header = ({course}) => {
  return(
    <div>
      <p>{course}</p>
    </div>
  )
}
const Part = ({name, exercises}) => {
  return(
    <div>
      <p>{name} {exercises}</p>
    </div>
  )
}
const Content = ({parts}) => {
  const [part1, part2, part3] = parts;
  return(
    <div>
    <Part name={part1.name} exercises={part1.exercises}/>
    <Part name={part2.name} exercises={part2.exercises}/>
    <Part name={part3.name} exercises={part3.exercises}/>
    </div>

  )
}

const Total = ({parts}) => {
  const total = parts.reduce((total, part) => total + part.exercises, 0)
  return(
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts : [
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
  },
  ],
  };
return (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />

  </div>
  
)
}
export default App;
