import React, { useState } from 'react'
import "./searchbar.scss"
import { BiSearchAlt2 } from "react-icons/bi"
import { useNavigate } from 'react-router-dom'

const Searchbar = () => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()
    const handleSearch = e => setSearch(e.target.value)
    const handleSubmit = (e) => {
        if (search) {
            navigate(`/search/${search}`)
            setSearch("")
        }
    }

    return (
        <div>
            <form className='search-form' onSubmit={handleSubmit}>
                <input className='search-bar' type="text" placeholder='search...' value={search} onChange={handleSearch} />
                <button type='submit' className='search-button'>
                    <BiSearchAlt2 />
                </button>
            </form>

        </div>
    )
}

export default Searchbar