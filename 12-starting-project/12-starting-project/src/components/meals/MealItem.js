import MealItemForm from "./MealItemForm";
import styles from "./MealItem.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

export default function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  const ctx = useContext(CartContext);

  function addToCartHandler(amount){
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });

  }

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.name} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}
