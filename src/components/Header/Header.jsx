import './Header.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Search from '../Header/Search/Search';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppCreateContext } from '../../utils/Context';

import { Icon } from '@iconify/react';
import shoppingBasketFill from '@iconify/icons-ri/shopping-basket-fill';

const Header = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { cartCount } = useContext(AppCreateContext);
  const handlescrol = () => {
    const offset = window.scrollY;
    // console.log(offset);
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handlescrol);
  }, []);

  return (
    <>
      <div className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
        <div className='header-content'>
          <ul className='left'>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>
          <div className='center-log' onClick={() => navigate('/')}>
            J.Sons
          </div>
          <div className='right-icons'>
            <Icon icon='ri:heart-fill' />

            <Icon icon='gg:search' onClick={() => setShowSearch(true)} />

            {/* set Callback Method  and setshowCart Method call */}
            <span className='cart-icon' onClick={() => setShowCart(true)}>
              <Icon icon={shoppingBasketFill} />
              <span className='dipo'>{cartCount}</span>
            </span>
          </div>
        </div>
      </div>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};
export default Header;
