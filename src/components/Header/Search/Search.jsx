import './Search.scss';
import { Icon } from '@iconify/react';
import prod from '../../../assets/products/earbuds-prod-1.webp';
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { fetchDataFromApi } from '../../../utils/Api';
// import { base_url } from '../../../utils/env';
const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchDataFromApi(
      '/api/products?populate=*&filters[title][$contains]=${query}'
    ).then((res) => {
      setQuery(res);
    });
  }, []);

  const onChange = (e) => {
    setQuery(e.target.value);
  };
  console.log(query);
  return (
    <div className='search-model'>
      <div className='form-field'>
        <input
          type='text'
          autoFocus
          placeholder='Search your product'
          onChange={onChange}
          value={query || ''}
        />

        <span className='close-tab'>
          <Icon icon='mdi:close-outline' onClick={() => setShowSearch(false)} />
        </span>
      </div>
      <div className='search-result-content'>
        <div className='search-result'>
          {query?.map((item) => {
            console.log(item);
            <div key={item.id} className='search-result-item'>
              <div className='image-container'>
                <img src={prod} alt='' />
              </div>
              <div className='product-detail'>
                <span className='product-name'>{item.attributes.title}</span>
                <span className='product-desc'>Product desc</span>
              </div>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
