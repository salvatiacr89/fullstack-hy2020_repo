import {useState} from 'react'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const StatisticsLine = (props) => {
  return (
    <tr><td>{props.text}</td> <td>{props.value}</td></tr>
  )
}

const Statistics = (props) => {
  let good = props.good
  let neutral = props.neutral
  let bad = props.bad
  if((good+neutral+bad) === 0) {
    return (
      <p> No feedback given</p>
    )
  }
  else {
    return (
      <table id="parent">
        <StatisticsLine text='good' value={good}/>
        <StatisticsLine text='neutral' value={neutral}/>
        <StatisticsLine text='bad' value={bad}/>
        <StatisticsLine text='all' value={good+neutral+bad}/>
        <StatisticsLine text='average' value={(good-bad)/(good+neutral+bad)}/>
        <StatisticsLine text='positive' value={(good/(good+neutral+bad))*100}/>
      </table>
    )
  }
}


const App = () => {
  // save click of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const clickHandler = (statistics) => {
    //console.log('Entered click handler with statistics', statistics)
    if(statistics === 'good') {setGood(good+1)}
    if(statistics === 'neutral') {setNeutral(neutral+1)}
    if(statistics === 'bad') {setBad(bad+1)}
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => clickHandler('good')} text="good"/>
      <Button handleClick={() => clickHandler('neutral')} text="neutral"/>
      <Button handleClick={() => clickHandler('bad')} text="bad"/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )

}

export default App;
