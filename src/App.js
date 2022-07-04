import React, { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown]=useState(false)

    const showCartHandler=()=>{
        setCartIsShown(true)
    }

    const hideCartHandler=()=>{
        setCartIsShown(false)
    }

    return (
    <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onOpen={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

//*показывать Cart, в зависимости от состояния true или false