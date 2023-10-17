import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchDataFromApi } from '../../../utils/Api';

import { base_url } from '../../../utils/env';
const RelatedProducts = ({ category, headingText }) => {
  // console.log('category id => ', category);
  const id = category;
  const [catedata, setCatedata] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    fetchDataFromApi(
      `/api/categories/${id}?populate[products][populate][0]=img`
    )
      .then((res) => {
        // console.log(res.attributes.products.data);
        setCatedata(res.attributes.products.data);
      })
      .catch((error) => {
        // console.log(error);
        error;
      });
  }, [id]);
  return (
    <>
      <div className='Category title'>Similar Products</div>
      <div className='Product_card'>
        {catedata?.map((item) => {
          return (
            <div
              key={item.id}
              className='home_page_product_container'
              onClick={() => {
                return navigate(`/SingleProduct/${item.id}`, { replace: true });
              }}
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
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RelatedProducts;
