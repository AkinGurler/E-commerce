import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTechnologicalProducts } from '../../actions/products'
import Navbar from "../../components/Navbar/Navbar"
import Products from '../../components/Products/Products'
import "./home.scss"

const Home = () => {
  const products = useSelector((state) => state.homePageProducts)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTechnologicalProducts())
  }, [])

  return (
    <div>
      <h2>New Products</h2>
      <Products products={products} />
    </div>
  )
}

export default Home