import React, { useEffect } from "react";
import "./ProductList.css";

import { AppDispatch, RootState } from "./store/retailStore";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./store/Cart/slice";
import { getProductsAsync } from "./store/Products/slice";


const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const isLoading = useSelector((state: RootState) => state.products.isLoading);
  
  useEffect(() => {
    dispatch(getProductsAsync());
  }, []);

  return (
    <div className="product-list">
      <h2>Products</h2>
      {isLoading && <div>Loading products...</div>}
      <ul>
        {products.map(product => (
          <li key={product.id} className="product-item">
            <div className="product-name">{product.name}</div>
            <div className="product-price">${product.price.toFixed(2)}</div>
            <button className="add-to-cart" onClick={() => dispatch(addItem(product))}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
