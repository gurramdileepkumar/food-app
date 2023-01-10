import React, { useRef,useState } from 'react'
import Input from '../../ui/Input'
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amountIsValid,setAmountIsValid]=useState(true);
  const amountInputRef=useRef()
  const submitHandler=(e)=>{
     e.preventDefault();
     const enteredAmount=amountInputRef.current.value;
     const enteredAmountNumber= +enteredAmount;
     console.log(amountInputRef);
     if(enteredAmount.trim().length === 0 ||
        enteredAmountNumber < 1 ||
        enteredAmountNumber > 5
     ){
      setAmountIsValid(false);
      return;
     }

     //you will call a function provided by mealItem and mealItem component will
     //prepare complete data a long with amount  and call addItem.
    //  props.onAddToCart(amountInputRef)
    console.log(enteredAmountNumber);
    props.onAddToCart(enteredAmountNumber)
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
        {/* <label>Amount</label>
        <input type="number" min="1" max="5" defaultValue="1"/> */}
        <Input 
        ref={amountInputRef}
        label="amount" 
        input={{
          id:"amount",
          min:"1",
          max:"5",
          defaultValue:"1",
          type:"number"
          }}
          />
        <button>AddTocart</button>
        {!amountIsValid && <p>Please add to cart (1-5)</p>}
      
    </form>
  )
}

export default MealItemForm
