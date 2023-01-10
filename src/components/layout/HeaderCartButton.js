import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import CartIcon from "../cart/CartIcon";
import classes from "./HeaderCartButton.module.css";



const HeaderCartButton = (props) => {
  const crtCtx=useContext(CartContext);
  const numberOfCartItems=crtCtx.items.reduce((curNumber,item)=>{
    return(
             curNumber + item.amount
            );
  },0);
  return (
    <button className={`${classes.button} ${classes.bump}`} onClick={props.onClick}>
      <span  className={classes.icon}>
        <CartIcon/>
      </span>
      <span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
      </span>
    </button>
  );
};

export default HeaderCartButton;
