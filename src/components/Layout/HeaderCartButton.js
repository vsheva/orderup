import React, {useContext} from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from "../../store/cart-context.js"

const HeaderCartButton = props => {

      const cartCtx = useContext(CartContext) //* cartCtx
    const numberOfCartItems = cartCtx.items.reduce((curValue, item)=>{return curValue+ item.amount}, 0)

  return (

    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
        <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>

  );
};

export default HeaderCartButton;
