import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
  let total = 0
  props.orders.forEach(el => total += Number.parseFloat(el.price))
  return (
    <div>
      {props.orders.map(item => (
        <Order onDelete={props.onDelete} key={item.id} item={item}/>
      ))}
      <p className='total'>Total: {total.toFixed(2)}$</p>
    </div>
  )
}

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>No goods were added</h2>
    </div>
  )
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul className='nav'>
              <li>About us</li>
              <li>Contacts</li>
              <li>Account</li>
            </ul>
            <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
            
            {cartOpen && (  
              <div className='shop-cart'>
                {props.orders.length > 0 ? showOrders(props) : showNothing()}
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
