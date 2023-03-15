import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCart } from '../../actions/products'
import "./ProductCard.scss"

const ProductCard = ({item,direction}) => {
    /* { product: { item: { itemId, title, sales, image, averageStarRate, sku: { def: { prices: { pc } } } } } }, */
    const dispath=useDispatch()
    const handleAdd=(productToCard)=>{
        console.log(productToCard)
        dispath(addCart(productToCard))
    }
   

    return (

        <div className='product-card-container' style={{display:"flex"}}>

            <Link to={`/product/${item.itemId}`}>
                <img src={item.image} alt={item.title} />
                <div className='card-content'>
                    <p>{item.title.slice(0, 60)}...</p>
                    <div >
                        <p className='price-card'>{item.sku.def.prices.pc}$</p>
                        {item.averageStarRate ? <p>Rate:{item.averageStarRate}</p>
                            : <p>Unrated</p>}
                    </div>

                </div>
                
                </Link>
                
                <button onClick={()=>handleAdd(item)} >Add Card</button>
            
        </div>
    )
}

export default ProductCard