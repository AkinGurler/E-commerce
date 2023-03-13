import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import "./Profile.scss"

const Profile = () => {
  const { user, isLoading, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const [active, setActive] = useState("orders")

  const profile = useSelector(state => state.profile)
  console.log("user bilgileri", profile)
  return (
    <div className='profile-container'>
      <div className='profile-top'>
        <div>
          <img src={user.picture} alt="" />
        </div>
        <div>
          <h3>{user.name}</h3>
          <h4>{user.email}</h4>
        </div>
        <div className='buttons-card'>
          <button onClick={() => setActive("orders")}>My Orders</button>
          <button onClick={() => setActive("login")}>Security</button>
          <button onClick={() => setActive("address")}>Address</button>
          <button onClick={() => setActive("payments")}>Your Payments</button>
        </div>

      </div>


      <div className='profile-bot'>

        {active === "orders" ?
        <div>
          <h3>My Orders</h3>
          <div className="orders">
            
            {
              profile.orders.map((order, index) => (
                <div key={index}  >
                  <ProductCard item={order}  />
                </div>
              ))}
          </div>
        </div>
        
          :
          "boş"
        }


      </div>

    </div>
  )
}

export default Profile