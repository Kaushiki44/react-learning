import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Kaushiki' age={18}/>
      <Card user='Nano' age={15}/>
    </div>
  )
}

export default App
