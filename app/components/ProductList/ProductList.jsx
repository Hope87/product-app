import React from "react";
import css from "./product-list.module.css";
import ProductItem from "./ProductItem/ProductItem";

function ProductList({ products }) {
  return (
    <ul className={css.productList}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product}/>
      ))}
    </ul>
  );
}

export default ProductList;
