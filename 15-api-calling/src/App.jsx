import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
  // async function getData(){
    // API CALLING USING FETCH
    // const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    // const data = await response.json();
    // console.log(data)

    //API CALLING USING AXIOS - better
    // const response = await axios.get('https://jsonplaceholder.typicode.com/users') 
    // console.log(response)
  //} 

    const [data, setData] = useState([])
    const getData = async (e) => {
      e.preventDefault();
      const response = await axios.get('https://jsonplaceholder.typicode.com/users') 
      setData(response.data)
    }
  
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem, idx){
          return <h3>Hello by {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
