import React from 'react'

const Card = (props) => {
    console.log(props.user, props.age);

  return (
    <div className='card'>
        <h1>{props.user}, {props.age} </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro recusandae officiis ipsam?</p>
    </div>
  )
}

export default Card
