import React, { useState, useEffect } from 'react';
import productsData from './products.json';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productsData.products);
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <div style={styles.cardContainer}>
                {products.map(product => (
                    <div key={product.id} style={styles.card}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p style={styles.price}>${product.price.toFixed(2)}</p>
                        <p>Category: {product.category}</p>
                        <button style={styles.button}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    cardContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        margin: '16px',
        width: '250px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
    },
    price: {
        fontWeight: 'bold',
        fontSize: '1.2em',
        color: '#007bff',
    },
    button: {
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '8px',
    }
};

export default ProductList;