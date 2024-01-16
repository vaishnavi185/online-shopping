import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Import the shopping cart icon
import './nav.css';

import Menu from './Menu.jsx';



export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  // Function to handle cart update
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

 
  return (
    
    <>
    <div className='header'>
      <li>
        <img src="/nav.png" alt="image" />
      </li>
      <li>
        <img src="/nav2.png" alt="image" />
      </li>
      <div className='divs'>
        <li><a href='#html'>Home </a></li>
        <li><a href='#html'>Menu </a></li>
        <li><a href='#html'>Blog</a></li>
        <li><a href='#html'>About </a></li>
        <li><a href='#html'>Contact</a></li>
        <li><button className='b1'>Log in</button></li>
        <li>
          <button className='b2' >
            <i className="fas fa-shopping-cart"></i>
            <FontAwesomeIcon icon={faShoppingCart} />  {cartCount}
          </button>
        </li>
      </div>
    </div>
    <Menu onAddToCart={handleAddToCart} />
   
    </>
  );
}
