import CartContext from './cart-context';
import React, { useReducer } from 'react';

const defaultCartState = {
  items: [],       //state.items
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {

    const updatedAmount = state.totalAmount + action.item.amount * action.item.price; //соединяем стейт (state.totalAmount из дефолта) и action(action.item, которое у нас {}//тот item из action будет обьектом, со свойствами item.name и item.price

    // ВАЖНАЯ СЛОЖНАЯ ЛОГИКА ДОБАВЛЕНИЯ В КОРЗИНУ !!!
    const existingCartItemIndex = state.items.findIndex(item => item.id===action.item.id) //в массиве проверяем по Id (если товар к-ё мы ищем равен товару, который был диспатчен, те. отправлен
    const existingCartItem = state.items[existingCartItemIndex] //когда нашли наш товор в массиве(корзине)  // если не нашли, то этой строки не будет

    let updatedItem //*
    let updatedItems //корзина

    //если такой товар уже есть в корзине
    if (existingCartItem) {
      updatedItem= {...existingCartItem, amount: existingCartItem.amount+action.item.amount } //обновленная позиция товара с новым количеством
      updatedItems = [...state.items] //копируем массив с со старым содержимым
      updatedItems[existingCartItemIndex] =updatedItem // на место позиции пиццы в массиве-  перезаписываем новое значение пиццы тем количеством, которое было вычеслено выше
    }
    //если товар доавляется в корзину впервые
    else {
        //updatedItem ={...action.item}   //наш action, который мы добавляе в state массив на вход ниже в state.items.concat(updatedItem)
      updatedItems = state.items.concat({...action.item});//соединяем cтейтовый массив пустов + actionовский item = в новый массив , т.е. в массив добавили item
    }


    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  return defaultCartState;
};




const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

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

  return <CartContext.Provider value={cartContext}>
    {props.children}</CartContext.Provider>;
};

export default CartProvider;
