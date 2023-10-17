import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Product/Product.scss';
import { AppCreateContext } from '../../utils/Context';
import { useNavigate } from 'react-router-dom';
import { base_url } from '../../utils/env';

export const Products = ({ headingText }) => {
  const { productList } = useContext(AppCreateContext);
  // console.log('ProductList', productList);
  const navigate = useNavigate();
  return (
    <>
      <div className=' '>{headingText}</div>
      <div className='Product_card'>
        {productList?.map((item) => {
          return (
            <Link
              key={item.id}
              className='home_page_product_container'
              to={`/SingleProduct/${item.id}`}
            >
              <div className='thumbnail'>
                <img
                  src={base_url + item.attributes.img.data[0].attributes.url}
                  alt=''
                />
              </div>
              <div className='product_detail'>
                <div className='product_action'>
                  <div className='add_to_cart'>Add to Cart</div>
                  <div className='price'>${item.attributes.price}</div>
                </div>
                <div className='product-title'>{item.attributes.title}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
