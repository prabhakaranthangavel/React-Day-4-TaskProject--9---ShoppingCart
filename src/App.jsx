import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';

const App = () => {
  // State to manage cart items and their quantities
  const [cart, setCart] = useState([]);
  
  // Sample product data
  const products = [
    { 
      id: 1, 
      name: 'Fancy Product', 
      price: '$40.00 - $80.00', 
      
    },

    { 
      id: 2,
      name: 'Special Item', 
      price: '$20.00 $18.00', 
      
    },

    { 
      id: 3, 
      name: 'Sale Item', 
      price: '$50.00 $25.00', 
      
    },

    { 
      id: 4, 
      name: 'Popular Item', 
      price: '$40.00', 
     
    },

    { 
      id: 5, 
      name: 'Sale Item', 
      price: '$50.00 $25.00', 
      
    },

    {
      id: 6, 
      name: 'Fancy Product', 
      price: '$120.00 - $280.00', 
      
    },

    { 
      id: 7, 
      name: 'Special Item', 
      price: '$20.00 $18.00', 
      
    },

    { 
      id: 8, 
      name: 'Popular Item', 
      price: '$40.00', 
      
    },

  ]

  // Function to add item to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to remove item from the cart
  const removeFromCart = (product) => {
    const updatedCart = cart.filter(item => item.id !== product.id);
    setCart(updatedCart);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Start Bootstrap</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">All Products</a></li>
                  <li><a className="dropdown-item" href="#">Popular Items</a></li>
                  <li><a className="dropdown-item" href="#">New Arrivals</a></li>
                </ul>
              </li>
            </ul>
          </div>
<form class="d-flex">
<button className="btn btn-outline-dark" type="submit">
    <i className="bi bi-cart-fill me-1"></i>
    Cart
    <span className="cart-counter ms-2">{cart.length}</span>
</button>
</form>
</div>
</nav>
      {/* Header */}
      <header>
        <h1><b>Shop in style</b></h1>
        <p class="headerp">With this shop homepage template</p>
      </header>

{/* Shopping Cards */}
<div className="shopping-cards">
  {/* First row */}
  <div className="row">
    {products.slice(0, 4).map(product => (
      <div key={product.id} className="col-md-3">
        <div className="card">
          <div className="card-body">
          <p className="img-size">450 x 300</p>
            <h5 className="card-title">{product.name}</h5>
            {product.name === 'Special Item' || product.name === 'Popular Item' ? (
              <div className="star-rating">⭐⭐⭐⭐⭐</div>
            ) : null}
            <p className="card-price">{product.price}</p>
            <p className="card-text">{product.description}</p>
            {cart.find(item => item.id === product.id) ? (
              <button className="btn btn-danger" onClick={() => removeFromCart(product)}>Remove from Cart</button>
            ) : (
              <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Second row */}
  <div className="row">
    {products.slice(4).map(product => (
      <div key={product.id} className="col-md-3">
        <div className="card">
          <div className="card-body">
          <p className="img-size">450 x 300</p>
            <h5 className="card-title">{product.name}</h5>
            {product.name === 'Special Item' || product.name === 'Popular Item' ? (
              <div className="star-rating">⭐⭐⭐⭐⭐</div>
            ) : null}
            <p className="card-price">{product.price}</p>
            <p className="card-text">{product.description}</p>
            {cart.find(item => item.id === product.id) ? (
              <button className="btn btn-danger" onClick={() => removeFromCart(product)}>Remove from Cart</button>
            ) : (
              <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

</div>
);
}
export default App;