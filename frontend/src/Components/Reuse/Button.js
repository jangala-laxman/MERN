import React from 'react'

const Button = ({type, name}) => {
  return (
    <Button type={type} style={style}>
      {name}
    </Button>
  )
}

const style ={
  backgroundColor : '#1746fff8',
  width:'2rem',
  height:'1rem',
  padding:'0.5rem',
}

export default Button