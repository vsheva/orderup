import React from "react";
import classes from './Cart.module.css'
import Modal from '../UI/Modal'

const Cart=(props)=>{
    const cartItems = <ul className={classes['cart-items']}>{[{id: "c1", name: "Pizza", amount: 2, price: 9.99}].map((item)=><li>{item.name}</li>)}</ul>  //<ul>{ }</ul>  - map -> li
    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
            <button className={classes["button--alt"]}>Close</button>
            <button className={classes.button}>Order</button>
            </div>


        </Modal >
    )

}

export default Cart;

  const cartItems = <ul className={classes['cart-items']}>{[{id: "c1", name: "Pizza", amount: 2, price: 9.99}].map((item)=><li>{item.name}</li>)}</ul>
//const cartItems =<ul className = {classes["cart-items"]}>{[{id:"1", name:"Pizza", price:12.99, amount:2}].map(item=>{<li>{item.name}</li>}) }</ul>