import { useEffect, useState } from 'react';
import { fetchDataFromApi } from '../../../utils/Api';

export default function Test() {
  const [query, setQuery] = useState();
  useEffect(() => {
    fetchDataFromApi('/api/products?populate=*').then((res) => {
      //   console.log(res);
      setQuery(res);
    });
  }, []);
  console.log(query);
  return (
    <div className='main'>
      <div className='search'>Search bar</div>
      <h3>Main Content</h3>
      {query?.map((item) => {
        console.log(item);
        return (
          <div key={item.id} className='search'>
            <div className='title'>Id:{item.attributes.id}</div>
            <div className='title'>Name:{item.attributes.title}</div>
            <div className='title'>Price:{item.attributes.price}</div>
          </div>
        );
      })}
    </div>
  );
}
