import React from 'react'
import { Link } from 'react-router-dom'
import "./ProductCard.scss"

const ProductCard = ({ product: { item: { itemId, title, sales, image, averageStarRate, sku: { def: { prices: { pc } } } } } }) => {


    return (

        <div className='product-card-container'>
            
                <Link to={`/product/${itemId}`}>
                    <img src={image} alt={title} />
                </Link>
            

            <div className='card-content'>
                <p>{title.slice(0, 60)}...</p>
                <div >
                    {averageStarRate ? <p>Rate:{averageStarRate}</p>
                        : <p>Unrated</p>}
                    <p>{pc}$</p>
                </div>

            </div>


        </div>
    )
}

export default ProductCard