import React from 'react';

function ProductList({ products, addToCart }) {
  return (
    <div style={{ flex: 2, marginRight: '20px' }}>
      <h2>Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.id} style={styles.card}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Category: {product.category}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px',
    width: '200px',
  },
};

export default ProductList;