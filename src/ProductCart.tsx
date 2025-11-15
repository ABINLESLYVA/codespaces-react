import React from "react";
import "./ProductCart.css";
import { useSelector } from "react-redux";
import { RootState } from "./store/retailStore";

const ProductCart: React.FC = () => {

  const cartItems = useSelector((state: RootState) => state.cart.items);  

  console.log(cartItems, 'cart items in cart');
  return (
    <div className="product-cart">
      <h2>Cart</h2>
      <ul>
        <li className="cart-item">
          <div className="cart-product-name">Product 1</div>
          <div className="cart-product-qty">Qty: 1</div>
          <div className="cart-product-price">$10.00</div>
        </li>
        <li className="cart-item">
          <div className="cart-product-name">Product 2</div>
          <div className="cart-product-qty">Qty: 2</div>
          <div className="cart-product-price">$40.00</div>
        </li>
      </ul>
      <div className="cart-total">
        <strong>Total: $50.00</strong>
      </div>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
}

export default ProductCart;
