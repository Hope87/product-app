import React from "react";
import css from './product-item.module.css'
import Badge from "@/app/UI/Badge/Badge";
import Image from 'next/image'

function ProductItem({product}) {
  return (
    <li key={product.id} className={css.productItem}>
      <div className={css.productImage}>
        <Image src={product.img} alt={product.name} width={420} height={240}/>
      </div>
      <div>
        <h2 className={css.productName}>{product.title}</h2>
        <div className={css.productDescription}>
          <p>{product.name}</p>
          <Badge badge={product.badge}/>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
