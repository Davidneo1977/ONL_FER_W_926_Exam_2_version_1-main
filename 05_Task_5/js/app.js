import React from "react";
import { createRoot } from "react-dom/client";


const UserDetails = ({ name, surname, address, postcode, city }) => {
  return (
    <div className="card">
      <div>
        <h5>{name} {surname}</h5>
        <div>{address}</div>
        <div>{postcode} {city}</div>
      </div>
    </div>
  );
};     



const App = () => {
  return (
    <div>
      <UserDetails 
        name="David" 
        surname="Wytz" 
        address="Oldřichovice 264" 
        postcode="739 01" 
        city="Třinec" 
      />
    </div>
  );
};

export default App;








/**
 * Do not modify the code below!
 */
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
