import './CartItem.scss';
import { Icon } from '@iconify/react';
import { useContext, useState } from 'react';
import { AppCreateContext } from '../../../utils/Context';
import { base_url } from '../../../utils/env';

const CartItem = () => {
  const { handelRemoveFromCard, cartItems, handelCardProductQuanity } =
    useContext(AppCreateContext);

  return (
    <div className='cart-products'>
      {cartItems?.map((item) => {
        // console.log(item);
        return (
          <div key={item.id} className='cart-product'>
            <div className='image-container'>
              <img
                src={base_url + item.attributes.img.data[0].attributes.url}
                alt=''
              />
            </div>
            <div className='product-detail'>
              <span className='product-name'>{item.attributes.title} </span>

              <div className='quantity-buttons'>
                <span
                  onClick={() => handelCardProductQuanity('increment', item)}
                >
                  +
                </span>
                <span>{item.attributes.quntity}</span>
                <span
                  onClick={() => handelCardProductQuanity('decrement', item)}
                >
                  -
                </span>
              </div>
              <div className='text'>
                <span>{item.attributes.quntity}</span>
                <span>x</span>
                <span className='highlite'>
                  {' '}
                  ${item.attributes.price * item.attributes.quntity}
                </span>
              </div>
            </div>
            <Icon
              icon='carbon:close-outline'
              className='close-btn'
              onClick={() => handelRemoveFromCard(item)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
