import React from 'react'
import "./searchbar.scss"
import {BiSearchAlt2} from "react-icons/bi"

const Searchbar = () => {
    return (
        <div> 
            <form className='search-form' action="">
            <input className='search-bar' type="text" placeholder='search...' />
            <button className='search-button'>
                
            <BiSearchAlt2/>
                
            
            </button>
            </form>
            
            
        </div>
    )
}

export default Searchbar