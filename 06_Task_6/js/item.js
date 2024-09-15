



import React from 'react';

function Item({ name, price }) {
  return (
    <li>
      {name}, Price: {price} Kč
    </li>
  );
}

export default Item;
