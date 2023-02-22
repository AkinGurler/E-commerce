import React, { useState } from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'
import Home from '../../pages/Home/Home'

const Navbar = () => {
  

    const [activePage, setActivePage] = useState("Home")
    return (
        <div className='fixed'>
            <div className='nav-container'>

                <div className='nav-left'>
                    <Link to="/">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI05d0VUtdygXuHVKOxN-gnKCAsOu-1ZKN7Q&usqp=CAU" alt="" />
                    </Link>
                </div>

            <div className="search-bar">
                <input type="text" />
            </div>

                <div className='nav-right'>
                    <Link
                        onClick={() => setActivePage("Home")}
                        className={activePage === "Home" && "active"}
                        to="/Home" >Home</Link>
                    <Link onClick={() => setActivePage("login")}
                        className={activePage === "login" && "active"}
                        to="/login"
                    >Log In
                        <div class="dropdown1">
                            <Link>Telefon</Link>
                            <Link>Tablet</Link>

                        </div>
                    </Link>
                    <Link onClick={() => setActivePage("Hakkımızda")}
                        className={activePage === "Hakkımızda" && "active"}>
                        Hakkımızda
                    </Link>
                    <Link onClick={() => setActivePage("Ürünler")} className={activePage === "Ürünler" && "active"} >
                        <span>Ürünler</span>
                        <div class="dropdown1">
                            <Link>Telefon</Link>
                            <Link>Tablet</Link>
                            <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatem adipisci, suscipit magnam harum nulla voluptatum illo excepturi praesentium quas reiciendis dignissimos? Placeat sapiente ducimus animi minus accusamus fugit temporibus.</Link>
                        </div>
                    </Link>


                </div>



            </div>
        </div>
    )
}

export default Navbar