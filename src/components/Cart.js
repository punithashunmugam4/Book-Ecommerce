import React, { useEffect, useState } from 'react'
import './Cart.css'

const Cart = ({cart, setCart}) => {
    const [price, setPrice] = useState(0);

    const handleRemove = (id) =>{
      const arr = cart.filter((item) => item.id !== id);
      setCart(arr)
      handlePrice()
  };

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.amount * item.price));
        setPrice(ans)
    }

    const handleChange = (item, d) => {
        const ind = cart.indexOf(item);
        const arr = cart;
        arr[ind].amount += d;
    
        if (arr[ind].amount === 0) arr[ind].amount = 1;
        setCart([...arr]);
      };

      
    useEffect(() => {
        handlePrice();
      });


  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
      </div>
    </article>
  )
}

export default Cart