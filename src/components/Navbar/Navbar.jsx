import React, { useState } from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Searchbar from '../Searchbar/Searchbar'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = () => {


    const [activePage, setActivePage] = useState("Home")
    const { user, isLoading, loginWithRedirect, logout, isAuthenticated } = useAuth0();

   /*  if (isLoading) {
        return <div>Loading ...</div>;
    } */
    return (
        <div className='fixed'>
            <div className='nav-container'>

                <div className='nav-left'>
                    <Link to="/">
                        <img  src="https://i.hizliresim.com/n0i1cyg.png" alt="" />
                    </Link>
                </div>

                <Searchbar />

                <div className='nav-right'>
                    <Link
                        onClick={() => setActivePage("Home")}
                        className={activePage === "Home" ? "active" : undefined}
                        to="/Home" >Home</Link>

                  
                    <Link onClick={() => setActivePage("AboutUs")}
                        className={activePage === "AboutUs" ? "active" : undefined}
                        to="/AboutUs">
                        About Us
                    </Link>
                    <Link onClick={() => setActivePage("Products")} className={activePage === "Products" ? "active" : undefined}
                        to="/Home" >
                        <span>Products</span>
                        <div className="dropdown1">
                            <Link to="/search/Outdoor">Outdoor</Link>
                            <Link to="/search/Electronic">Electronic</Link>
                            <Link to="/search/Fashion">Fashion</Link>
                            <Link to="/search/Cosmetics">Cosmetics</Link>
                            <Link to="/search/book">Book</Link>
                        </div>
                    </Link>



                    {isAuthenticated &&
                        <>
                            <Link
                                onClick={() => setActivePage("Card")}
                                className={activePage === "Card" ? "active" : undefined}
                                to="/Card" >Card</Link>

                            <Link
                                onClick={() => setActivePage("Profile")}
                                className={activePage === "Profile" ? "active" : undefined}
                                to={`/Profile/`} >
                                <div className='navbar-profile'>
                                    <img src={user.picture} alt="" />
                                    <span>{user.name}</span>
                                </div>
                            </Link>
                        </>
                    }

                    {isAuthenticated ? <button onClick={logout}>
                        Log Out
                    </button> :
                        <button onClick={loginWithRedirect}>Login</button>}





                </div>



            </div>
        </div>
    )
}

export default Navbar