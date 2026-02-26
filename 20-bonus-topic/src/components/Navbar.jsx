import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <button onClick={()=>{
        props.setTheme('Dark') 
        // ab data navbar->app.jsx bhi jara (neeche se upar)
      }}>Change theme</button>
    </div>
  )
}

export default Navbar
