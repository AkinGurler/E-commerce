import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom';
import {getTechnologicalProducts} from "../../actions/products"
import "./products.scss"
import {useDispatch,useSelector} from "react-redux"
import ProductCard from '../ProductCard/ProductCard';


const Products = ({products}) => {
     console.log("products",products)
  return (
    <div className='products'>
      {products.map((product,index)=>(
        <div key={index}>
          <ProductCard item={product.item} />
          </div>
      )
      )}
    </div>
  )
}

export default Products