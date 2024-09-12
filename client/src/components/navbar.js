import React from 'react';

const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <div style={styles.logo}>ShopApp</div>
            <ul style={styles.navItems}>
                <li style={styles.navItem}>
                    <a href="/" style={styles.navLink}>Products</a>
                </li>
                <li style={styles.navItem}>
                    <a href="/cart" style={styles.navLink}>Cart</a>
                </li>
            </ul>
        </nav>
    );
}

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#333',
        color: 'white',
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    navItems: {
        listStyle: 'none',
        display: 'flex',
        margin: 0,
        padding: 0,
    },
    navItem: {
        margin: '0 1rem',
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1rem',
    },
};

export default Navbar;