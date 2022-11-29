import './App.css';
import React from 'react';
import Home from './components/Home';
import Cart from './components/Cart'
import Navbar from './components/Navbar';
import { useState,createContext } from 'react';

export const data = createContext()

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleRemove = (id) =>{
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr)
};

  return (
    <React.Fragment>
    <data.Provider value={{handleClick,cart, handleRemove}} >
      <Navbar setShow={setShow} cart={cart}/>
      {show ? <Home/> : <Cart cart={cart} setCart={setCart}/>}
      </data.Provider>
    </React.Fragment>
  );
}

export default App;
