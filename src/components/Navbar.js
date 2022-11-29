import React from 'react';
import './Navbar.css';

const Navbar = ({setShow, cart}) => {
  return (
    <nav>
        <div className='nav-container'>
            <span className='my_shop' onClick={()=>setShow(true)}>Book E-Kart Online</span>
            <div className='cart' onClick={()=>setShow(false)}>
                <span>
                    <i className='fas fa-cart-plus'></i>
                </span>
                <span>{cart.length}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar