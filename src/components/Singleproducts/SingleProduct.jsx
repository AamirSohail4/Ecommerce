import './SingleProduct.scss';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import { Icon } from '@iconify/react';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { fetchDataFromApi } from '../../utils/Api';
import { base_url } from '../../utils/env';
import { AppCreateContext } from '../../utils/Context';

const SingleProduct = () => {
  const { handelAddToCard } = useContext(AppCreateContext);
  const { id } = useParams();
  // console.log(id);
  const [productList, setProductList] = useState();
  const [quantity, SetQuantity] = useState(1);

  const getProducts = () => {
    fetchDataFromApi(`/api/products?populate=*&[filters][id]=${id}`).then(
      (res) => {
        // console.log(res);
        setProductList(res);
      }
    );
  };
  // console.log(productList);
  // console.log(productList ? productList[0].attributes.category.data.id : '');

  useEffect(() => {
    getProducts();
  }, [id]);

  const increement = () => {
    SetQuantity((prevState) => prevState + 1);
  };
  const decrement = () => {
    SetQuantity((prevState) => prevState - 1);
  };
  const categotyId = productList
    ? productList[0].attributes.category.data.id
    : '';
  return (
    <div className='Singleproduct-main-content'>
      {productList?.map((item) => {
        // console.log(item);
        return (
          <div key={item.id} className='Singleproduct-layout'>
            <div className='Single-product-page'>
              <div className='left-side'>
                <img
                  src={base_url + item.attributes.img.data[0].attributes.url}
                  alt=''
                />
              </div>
              <div className='right-side'>
                <span className='name'>ID:{item.attributes.title}</span>
                <span className='price'>${item.attributes.price}</span>
                <span className='desc'>{item.attributes.desc}</span>

                <div className='cart-button'>
                  <div className='quantity-buttons'>
                    <span onClick={increement}>+</span>
                    <span>{quantity}</span>
                    <span onClick={decrement}>-</span>
                  </div>
                  <button
                    className='add-to-cart-button'
                    onClick={() => {
                      handelAddToCard(item, quantity);
                      SetQuantity(1);
                    }}
                  >
                    <Icon
                      icon='iconoir:add-to-cart'
                      size={14}
                      className='cart-idx'
                    />
                    ADD TO CART
                  </button>
                </div>
                <span className='divider' />
                <div className='info-item'>
                  <span className='text-bold'>
                    Category:
                    <span>
                      {item.attributes.category.data.attributes.title}
                    </span>
                  </span>
                  <span className='text-bold'>
                    Share:
                    <span className='social-icon'>
                      <Icon icon='devicon:facebook' />
                      <Icon icon='skill-icons:twitter' />
                      <Icon icon='skill-icons:instagram' />
                      <Icon icon='devicon:linkedin' />
                      <Icon icon='logos:pinterest' />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className='Singleproduct-layout'>
        <RelatedProducts category={categotyId} />
      </div>
    </div>
  );
};

export default SingleProduct;
