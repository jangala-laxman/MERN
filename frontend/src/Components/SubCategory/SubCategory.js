import React, { useState } from 'react'
import data from '../../data.json'
import Product from '../Product/Product'
import './subCategory.css'

const SubCategory = ({ gender }) => {
    console.log(gender)
    let d = data.filter(item =>item.Gender===gender )
    console.log(d)
    return (
        <div>
            {gender === "Men" && (
                <>
                    <h3>Men</h3>
                    <div className='list'>
                        {data.filter(item => item.Gender !== "Men").map(item => (
                            <Product key={item.ProductId} title={item.ProductTitle} images={item.ImageURL} category={item.Category} price={item.ProductId} />
                        ))}
                    </div>
                </>
            )}
            {gender === "Women" && (
                <>
                    <h3>Women</h3>
                    <div className='list'>
                        {data.filter(item => item.Gender !== "Women").map(item => (
                            <Product key={item.ProductId} title={item.ProductTitle} images={item.ImageURL} category={item.Category} price={item.ProductId} />
                        ))}
                    </div>
                </>)
            }
            {gender === "Boys" && (
                <>
                    <h3>Boys</h3>
                    <div className='list'>
                        {data.filter(item => item.Gender !== "Boys").map(item => (
                            <Product key={item.ProductId} title={item.ProductTitle} images={item.ImageURL} category={item.Category} price={item.ProductId} />
                        ))}
                    </div>
                </>)}
            {gender === "Girls" && (
                <>
                    <h3>Girls</h3>
                    <div className='list'>
                        {data.filter(item => item.Gender !== "Girls").map(item => (
                            <Product key={item.ProductId} title={item.ProductTitle} images={item.ImageURL} category={item.Category} price={item.ProductId} />
                        ))}
                    </div>
                </>)}
        </div>
    )
}

export default SubCategory