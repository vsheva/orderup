import CartContext from './cart-context';
import React, { useReducer } from 'react';

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item); //соединяем cтейтовый массив пустов + actionовский item = в новый массив , т.е. в массив добавили item
    const updatedAmount = state.totalAmount + action.item.amount * action.item.price; //соединяем стейт (state.totalAmount из дефолта) и action(action.item, которое у нас {}//тот item из action будет обьектом, со свойствами item.name и item.price
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  return defaultState;
};

const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);

  const addItemToCartHandler = item => {
    dispatchCartAction({ type: 'ADD', item: item });
  };
  const removeItemFromCartHandler = id => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
