import React from "react";
import "./ProductList.css";

import { AppDispatch } from "./store/retailStore";
import { useDispatch } from "react-redux";
import { addItem } from "./store/slice";


const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const products = [
    { id: 1, name: "Product 1", price: 10.0 },
    { id: 2, name: "Product 2", price: 20.0 },
    { id: 3, name: "Product 3", price: 30.0 },
  ];

  return (
    <div className="product-list">
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id} className="product-item">
            <div className="product-name">{product.name}</div>
            <div className="product-price">${product.price.toFixed(2)}</div>
            <button className="add-to-cart" onClick={() => dispatch(addItem(product.name))}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
