import React, {useState} from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Product.css'
const Product = ({ title, image, price }) => {
    const [like, setLike] = useState(false)
    return (
        <div className='product'>

            <div className='prodImage' >
                <img
                    src={image}
                    alt={title}
                />
            </div>
           
            <div className='priceandWishlist'>
                <div className='like'>
                    {like ?  <FavoriteIcon style={{ color: 'red' }} />:<FavoriteBorderIcon /> }
                </div>
                <p>{title}</p>
                <h5>₹{price}</h5>
                
            </div>

        </div>
    )
}

export default Product