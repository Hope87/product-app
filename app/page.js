"use client";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import Pagination from "./components/Pagination/Pagination";
import css from './page.module.css'

export default function Home() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

  useEffect(() => {
    const getProducts = () => {
      fetch("/api/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        });
    };
    getProducts();
  }, []);

  const lastProductIndex = currentPage * productsPerPage
  const firstProductIndex = lastProductIndex - productsPerPage
  const currentProduct = products.slice(firstProductIndex, lastProductIndex)

  const nextPage = () => {
    if(lastProductIndex < products.length){
      setCurrentPage(prev => prev + 1)
    }
   
  }
  const prevPage = () => {
    if(currentPage !== 1){
      setCurrentPage(prev => prev - 1)
    }
    
  }

  return (
    <div className={css.home}>
      <h1 className={css.title}>Products</h1>
      <ProductList products={currentProduct} />
      <Pagination currentPage={currentPage} nextPage={nextPage} prevPage={prevPage} />
    </div>
  );
}
