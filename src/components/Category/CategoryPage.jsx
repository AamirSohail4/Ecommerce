import './Category.scss';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchDataFromApi } from '../../utils/Api';
import { base_url } from '../../utils/env';

export default function Category() {
  const { id } = useParams();
  console.log(id);
  const [mydata, setData] = useState([]);

  useEffect(() => {
    fetchDataFromApi(
      `/api/categories/${id}?populate[products][populate][0]=img`
    )
      .then((res) => {
        setData(res.attributes.products.data);
        // console.log('amir', amir);
      })
      .catch((error) => {
        // console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  console.log(mydata);
  return (
    <div className='category-main-contant'>
      <div className='layout'>
        <div className='Category title'>Category</div>
        <div className='Product_card'>
          {mydata?.map((item) => {
            // console.log(item);
            return (
              <Link
                className='home_page_product_container'
                key={item.id}
                to={`/SingleProduct/${item.id}`}
              >
                {/* <div
                  className='home_page_product_container'
                  // onClick={() => navigate(`/SingleProduct/${item.id}`)}
                > */}
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
                {/* </div> */}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
