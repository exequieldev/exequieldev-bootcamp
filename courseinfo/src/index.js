import React from 'react'
import ReactDOM from 'react-dom'

/*
  const Title = ({course}) => <h1>{course}</h1>
**/

const Title = (props) => {
  return <h1>{props.course}</h1>
}
const Part1 = (props) => {
  return <p>{props.part} {props.exercise}</p>
}

const Part2 = (props) => {
  return <p>{props.part} {props.exercise}</p>
}

const Part3 = (props) => {
  return <p>{props.part} {props.exercise}</p>
}

const App = () => {

  

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course={course}/>
      <Part1 part={part1} exercise={exercises1}/>
      <Part2 part={part2} exercise={exercises2}/>
      <Part3 part={part3} exercise={exercises3}/>
      
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))