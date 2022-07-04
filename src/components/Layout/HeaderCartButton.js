import React from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartProvider from "../../store/CartProvider"

const HeaderCartButton = props => {
  return (
      <CartProvider>
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
        <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
      </CartProvider>
  );
};

export default HeaderCartButton;
