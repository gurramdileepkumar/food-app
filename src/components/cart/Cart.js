import React,{ useContext } from 'react'
import Modal from '../ui/Modal'
import classes from './Cart.module.css';
import CartContext from '../../store/CartContext';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCtx=useContext(CartContext);
  const hasItem=cartCtx.items.length > 0;
  const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`;
  const cartItemsRemoveHandler=(id)=>{
    cartCtx.removeItem(id);
  }
  const cartItemAddHandler=(item)=>{
    cartCtx.addItem({...item,amount:1})
  }
  console.log('cartCtx',cartCtx);
    const cartList=(
    <ul className={classes["cart-items"]}>
       {cartCtx.items.map((item)=>(
        <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price} 
        onRemove={cartItemsRemoveHandler.bind(null,item.id)}
        onAdd={cartItemAddHandler.bind(null,item)}
        />
        ))}
    </ul>
    )
  return (
    <Modal onCartClose={props.onCloseCart}>
        {cartList}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>Close</button>
        {hasItem && <button className={classes.button}>Order</button> }
      </div>
    </Modal>
  )
}

export default Cart
