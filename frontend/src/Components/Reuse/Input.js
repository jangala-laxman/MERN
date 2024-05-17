import React  from 'react'

const Input = ({label, value, onChange}) => {
    
  return (
    <div className='input'>
        <div>
            <label htmlFor={label}>{label}</label>
        </div>
        <input id={label} 
            type="text" 
            name={value} 
            value={value} 
            onChange={onChange} />
    </div>
  )
}

export default Input