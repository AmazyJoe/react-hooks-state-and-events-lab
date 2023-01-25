import React, { useState } from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState("");
  function handleOnClick(event){
    isInCart === "" ? setIsInCart("in-cart") : setIsInCart("");
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleOnClick}>{isInCart === "" ? "Add from Cart" : "Remove from Cart"}</button>
    </li>
  );
}

export default Item;