import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getSearchedProducts } from '../../actions/products';
import Products from '../Products/Products';
import "./SearchPage.scss"

const SearchPage = () => {
    const { searchTerm } = useParams();
    const products = useSelector((state) => state.homePageProducts)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSearchedProducts(searchTerm))
    }, [searchTerm])

    if (products.length === 0) return "Loading..."

    return (
        
        <div className='search-page-container'>
            <h2>Result For <span>{searchTerm}</span></h2>
            <Products products={products} />
        </div>
    )
}

export default SearchPage