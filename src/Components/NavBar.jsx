import { useContext, useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { ShopContext } from '../Context/ShopContext';

function NavBar() {
  const [menu, setMenu] = useState('shop');
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' />
        <p>IRON SURF STORE</p>
      </div>
      <ul className='nav-menu'>
        <li
          onClick={() => {
            setMenu('shop');
          }}
        >
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
            Shop
          </Link>{' '}
          {menu === 'shop' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('fins');
          }}
        >
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/fins'>
            Fins
          </Link>{' '}
          {menu === 'fins' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('decks');
          }}
        >
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/decks'>
            Decks
          </Link>{' '}
          {menu === 'decks' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('board-bags');
          }}
        >
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to='/board-bags'
          >
            Leashes
          </Link>{' '}
          {menu === 'board-bags' ? <hr /> : <></>}
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'>
          <button>Login</button>
        </Link>
        <Link to='/cart'>
          <img src={cart_icon} alt='' />
        </Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default NavBar;
