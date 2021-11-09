import React, { useState } from 'react';

const Statictics = ({good, neutral, bad}) => {
  const all = good + neutral + bad;
  const average = (good * 1 + bad * -1)/all;
const percent = `${good / all * 100}%`;
  if (good > 0 || neutral > 0|| bad > 0){
    return(
      <div>
        <h2>Statictics</h2>
        <table>
          <tbody>
            <Statictic text="Good" value={good}/>
            <Statictic text="Neutral" value={neutral}/>
            <Statictic text="Bad" value={bad}/>
            <Statictic text="All" value={all}/>
            <Statictic text="Average" value={average}/>
            <Statictic text="Percent of positive" value={percent}/>
            </tbody>
        </table>
      </div>
    )
    }
     return <p>No feedback given</p>
}

const Statictic = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Button = ({ handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }
  return (
    <div>
      <h1>Give Feedback</h1>
        <Button handleClick={handleGoodClick} text="Good"/>
        <Button handleClick={handleNeutralClick} text="Neutral"/>
        <Button handleClick={handleBadClick} text="Bad"/>
        <Statictics good={good} neutral={neutral} bad={bad} />


  
    </div>
  );
}

export default App;
