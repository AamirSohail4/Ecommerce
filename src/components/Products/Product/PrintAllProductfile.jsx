/* eslint-disable react/prop-types */
import { useContext } from 'react';
import './Product.scss';
import { useNavigate } from 'react-router-dom';
import { AppCreateContext } from '../../../utils/Context';
import { base_url } from '../../../utils/Api';

export const PrintAllProductfile = ({ id, data }) => {
  const navigate = useNavigate();
  const { productList } = useContext(AppCreateContext);
  console.log(productList);

  return (
    <div
      className='Product_card '
      onClick={() => navigate('/SingleProduct/' + id)}
    >
      {productList?.map((item) => {
        return (
          <diV key={item.id}>
            <div className='thumbnail'>
              <img src={base_url + data.img.data[0].attributes.url} alt='' />
            </div>
            <div className='Product-details'>
              <span className='Product-name'>{data.title}</span>
              <span className='price'>${data.price}</span>
            </div>
          </diV>
        );
      })}
    </div>
  );
};
