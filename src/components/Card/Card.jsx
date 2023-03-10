import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { completeShopping, deleteFromCard } from '../../actions/products'
import "./Card.scss"

const Card = () => {
  const card = useSelector(state => state.card)
  const dispatch=useDispatch()
  console.log("sepetteki ürünler",card)
  const handleDelete=(itemId)=>{
    dispatch(deleteFromCard(itemId))
  }
  const handleShopping=(card)=>{
      dispatch(completeShopping(card))
  }
  const total = card.reduce((total, item) => (total += item.sku.def.prices.pc), 0);

  return (
    <div >
      <div className="products-container">
       
           <h2>Products</h2>
        {card.map((item, index) => (
          <div className='product' key={index}>
            <img width={"100px"} height={"100px"} src={item.image} alt="" />
            <span>{item.title}</span>
            <span>{item.sku.def.prices.pc}$</span>
            <button className='delete-button' onClick={()=>handleDelete(item.itemId)}>Delete</button>
          </div>

        ))}
        <p className='total'>Total Price : {total}$ </p>
        </div>
       
      
      <div className='buttons'>
        <button onClick={()=>handleShopping(card)} >Complete the Shopping</button>
        <Link to="/Home">
        <button> Continue Shopping</button>
        </Link>
       
      </div>
      
    </div>
  )
}

export default Card