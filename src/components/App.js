import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import {useState} from 'react';


function App() {
  const [darkMode, setDarkMode] = useState(false)
  
  const appClass = false ? "App dark" : "App light"

    function handleOnClick(event){
    
    
    setDarkMode(({darkMode}) => !darkMode);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleOnClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;