import React from "react";
import "./ProductCart.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/retailStore";

const ProductCart: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();
  const addedItems = useSelector((state: RootState) => state.cart.items);  

  const cartItems = addedItems.reduce((acc: { id: number, name: string; qty: number; price: number }[], item: { id: number; name: string; price: number }) => {
    const existingItem = acc.find(i => i.name === item.name);
    if (existingItem) {
      existingItem.qty += 1;
    } else {
      acc.push({ id: item.id, name: item.name, qty: 1, price: item.price });
    }
    return acc;
  }, []);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

  return (
    <div className="product-cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.name} className="cart-item">
            <div className="cart-product-name">{item.name}</div>
            <div className="cart-product-qty">Qty: {item.qty}</div>
            <div className="cart-product-price">${item.price}</div>
            &nbsp;&nbsp;&nbsp;
            <span role="button" className="cart-delete" title="Remove" onClick={() => dispatch({ type: 'cart/triggerRemoveItem', payload: item.id })}>🗑️</span>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <strong>Total: ${totalPrice.toFixed(2)}</strong>
      </div>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
}

export default ProductCart;
