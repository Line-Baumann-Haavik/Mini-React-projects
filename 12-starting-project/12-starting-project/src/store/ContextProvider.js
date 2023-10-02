import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    total: 0
};

function cartReducer(state, action){
    let updatedItems;
    
    if(action.type === "ADD"){
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const updatedTotal = state.total + action.item.price * action.item.amount;
        const existingCartItem = state.items[existingCartItemIndex];

        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }else{
            updatedItems = state.items.concat(action.item);
        }

        return({
            items: updatedItems,
            total: updatedTotal
        })
    }
    else if(action.type === "REMOVE"){
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
          );
          const existingItem = state.items[existingCartItemIndex];
          const updatedTotalAmount = state.total - existingItem.price;
          let updatedItems;
          if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
          } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
          }

        return({
            items: updatedItems,
            total: updatedTotalAmount
        })
    }
    return(defaultCartState)
}


export default function ContextProvider(props){

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    function addItemToCart(item){
        dispatchCartAction({type: "ADD", item: item })

    }
    function removeItemFromCart(id){
        dispatchCartAction({type: "REMOVE", id: id});
    }

    const cartContext = {
        items: cartState.items,
        total: cartState.total,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    }

    return(<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>)

}