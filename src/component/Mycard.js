import React from 'react'

const Mycard = (props) => {
  return (
    <div className='me'>
       <h1>{props.name}</h1>
       <img src= {props.img}>
       <h4>{props.award}</h4>
       <h5>{props.prof}</h5>

    </div>
  )
}

export default Mycard