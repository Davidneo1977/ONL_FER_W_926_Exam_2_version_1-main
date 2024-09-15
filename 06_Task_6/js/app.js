import React from "react";
import { createRoot } from "react-dom/client";
import products from './js/data/products'; 

function App() {
  return (
    <div>
      <h1>My Shop</h1>
      <Products products={products} /> 
    </div>
  );
}

export default App;  






/**
 * Do not modify the code below!
 */
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
 

