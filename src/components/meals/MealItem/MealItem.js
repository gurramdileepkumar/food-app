import { useContext } from "react";
import CartContext from "../../../store/CartContext";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";


const MealItem = (props) => {
 const cartCtx= useContext(CartContext);
  const addToCartHandler=(amount)=>{
      cartCtx.addItem({
        id:props.id,
        name:props.meal.name,
        amount:amount,
        price:props.meal.price
      });
      console.log(cartCtx);
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{props.meal.price}</div>
      </div>
      <div>
        <MealItemForm  onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
