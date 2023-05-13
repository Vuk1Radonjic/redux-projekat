import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
//import { useEffect } from "react";

const MainPage = () => {
  const [products, setProducts] = useState(null);
  const dispatch = useDispatch();

  const fetchingDataProduct = () => {
    fetch('https://dummyjson.com/products')
    .then((res) => { console.log(res.json()) })
    .then((data) => { setProducts(data.products) });
    dispatch({ items: products });
  };

  return (
    <div>
      <label>Add Product:</label>
      <input type="text"></input>
      <button onClick={fetchingDataProduct}>Add product</button>
      <button>Remove product</button>
    </div>
  );
};

export default MainPage;