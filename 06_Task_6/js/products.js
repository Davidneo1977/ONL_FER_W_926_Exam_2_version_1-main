

import React from 'react';
import Item from './products';

function Products({ products }) {
  return (
    <div>
      <h2>Produkty</h2>
      <ul>
        {products.map((product) => (
          <Item key={product.id} name={product.name} price={product.price} />
        ))}
      </ul>
    </div>
  );
}

export default Products;
