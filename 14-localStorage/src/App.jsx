import React from 'react'

const App = () => {

  //if Storing obj in localStorage
  const user = { 
    user: "Kaushiki",
    age: 21,
    city: "Lucknow"
  }

  localStorage.setItem('user', JSON.stringify(user))
  const usera = JSON.parse(localStorage.getItem('user'))


  return (
    <div>
      app    
    </div>
  )
}

export default App
