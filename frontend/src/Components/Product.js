import React from 'react'

const Products = ({title, images, category, description, price}) => {
  return (
    <div className='product'>
      <h4>{title}</h4>
      <div >
        <img className='prodImage' 
          src={images[0]}
          alt={title}
        />
      </div>
      <p>{price}</p>
      
      <p>{description}</p>

    </div>
  )
}

export default Products