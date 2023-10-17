import { useContext } from 'react';
import { base_url } from '../../../utils/env';
import './Category.scss';
import { useNavigate } from 'react-router-dom';
import { AppCreateContext } from '../../../utils/Context';

const Category = () => {
  const { categoryList } = useContext(AppCreateContext);
  // console.log(categoryList);
  const navigate = useNavigate();

  return (
    <div className='shop-by-catigory'>
      <div className='catigories'>
        {categoryList?.map((item) => (
          <div
            key={item.id}
            className='category'
            onClick={() => navigate(`/Category/${item.id}`)}
          >
            <img
              src={base_url + item.attributes.img.data.attributes.url}
              alt=''
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
