import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom';
import {getTechnologicalProducts} from "../../actions/products"
import "./products.scss"
import {useDispatch,useSelector} from "react-redux"
import ProductCard from '../ProductCard/ProductCard';


const Products = () => {
    const products=useSelector((state)=>state.products)
    const dispatch=useDispatch();  


    useEffect(() => {
      dispatch(getTechnologicalProducts())      
    },[])

    
  return (
    <div className='products'>
      {products.map((product,index)=>(
        <div key={index}>
          <ProductCard product={product} />
          </div>
      )
      )}
    </div>
  )
}

export default Products