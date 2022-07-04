import React, { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown]=useState(false)

    const showCartHandler=()=>{
        setCartIsShown(true)
    }

    const hideCartHandler=()=>{
        setCartIsShown(false)
    }

    return (
    <Fragment>
        {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onOpen={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;

//*показывать Cart, в зависимости от состояния true или false