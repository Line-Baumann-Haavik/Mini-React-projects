import CartIcon from "../cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";

export default function HeaderCartButton(props){
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const ctx = useContext(CartContext);

    const numberOfCartItems = ctx.items.reduce((currentNumber,item) => {
        return(currentNumber+item.amount)
    },0);

    const btnclasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;

    const {items} = ctx;

    useEffect(() => {
        if(items.length === 0){
            return;
        }
        setBtnIsHighlighted(true);
        setTimeout(() => {setBtnIsHighlighted(false)}, 300)
    }, [items]);

    return(
        <button className={btnclasses} onClick={props.onClicks}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={styles.badge}> {numberOfCartItems} </span>
        </button>
    );
}