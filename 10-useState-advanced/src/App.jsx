import React, { useState } from 'react'

const App = () => {

  // const [num, setNum] = useState({user:'kaushiki', age: 21})
  const [num, setNum] = useState(10)

  const btnClicked = () =>{
    // const newNum = {...num};
    // newNum.user = 'Rashi';
    // setNum(newNum);

    // setNum(prev=>({...prev, age:50}))

    // setNum(num+1 )
    // setNum(num+1 )
    // setNum(num+1 ) => DOES NOT WORK

    setNum(prev=> (prev+1))
    setNum(prev=> (prev+1))
    setNum(prev=> (prev+1))
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
      
    </div>
  )
}

export default App
