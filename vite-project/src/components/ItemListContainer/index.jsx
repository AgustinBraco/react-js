import "./itemListContainer.css"
import Products from "../../mocks/products"
import ItemList from "../ItemList/index"
import { useId, useEffect, useState } from "react";

function ItemListContainer({language, mode, pokemon, categoryId, isCategoryRoutes}) {
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    const productsPromise = new Promise((resolve, reject) =>
      setTimeout(() => 
      resolve(Products), 2000)
    );

    productsPromise
    .then((response) => {
      if (isCategoryRoutes) {
        const productsFiltered = response.filter(
          (products) => products.category === categoryId
        );
        setProducts(productsFiltered)
      } else {
        setProducts(response)
      }
    })
    .catch((err) => console.log(err));
  }, [categoryId]);

  return (
    <div>
      <span className="textGreeting">{language}</span>
      <span className="textGreeting">{mode}</span>
      <span className="textGreeting">{pokemon?.name.toUpperCase()}</span>
      {Products.map((product, index) => {
        const newId = useId();
        return (
        <span className="textGreeting" key={newId}>
          {product.description} #{index} ({newId})<br/>
        </span>
        );
      })};
      <ItemList products={products}/>
    </div>
  );
};

export default ItemListContainer;