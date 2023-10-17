import './Cart.scss';
import { Icon } from '@iconify/react';
import Cartitem from '../Cart/CartItem/CartItem';
import { useContext } from 'react';
import { AppCreateContext } from '../../utils/Context';
const Cart = ({ setShowCart }) => {
  const { cartItems, cartSubTotal } = useContext(AppCreateContext);
  return (
    <div className='Cart-panal'>
      <div className='opacity-layer'></div>
      <div className='cart-content'>
        <div className='Cart-header'>
          <span className='heading-cart'>Shoping Cart</span>
          <span className='close-btn' onClick={() => setShowCart(false)}>
            <Icon icon='carbon:close-outline' />
            <span className='text-close'>Close</span>
          </span>
        </div>
        {!cartItems?.length && (
          <div className='empty-card'>
            <Icon icon='mi:shopping-cart-add' />
            <span>No Product in the cart</span>
            <button className='return-cats'>Return to Shop </button>
          </div>
        )}
        {!!cartItems?.length && (
          <>
            <Cartitem />
            <div className='cart-footer'>
              <div className='subtotal'>
                <span className='subtotal-text'>Subtotal:</span>
                <span className='text-total'>$:{cartSubTotal}</span>
              </div>
              <div className='button'>
                <button className='checkout-btn'>CheckOut</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
