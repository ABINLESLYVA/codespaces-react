import React from "react";
import "./ProductCart.css";
import { useSelector } from "react-redux";
import { RootState } from "./store/retailStore";

const ProductCart: React.FC = () => {

  const addedItems = useSelector((state: RootState) => state.cart.items);  

  const cartItems = addedItems.reduce((acc: { name: string; qty: number;}[], item: string) => {
    const existingItem = acc.find(i => i.name === item);
    if (existingItem) {
      existingItem.qty += 1;
    } else {
      acc.push({ name: item, qty: 1});
    }
    return acc;
  }, []);

  return (
    <div className="product-cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.name} className="cart-item">
            <div className="item-name">{item.name}</div>
            &nbsp;
            <div className="item-qty">Quantity: {item.qty}</div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <strong>Total: $50.00</strong>
      </div>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
}

export default ProductCart;
