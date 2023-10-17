import { useContext } from 'react';
import { AppCreateContext } from '../utils/Context';

export default function ProductPageForAllProduct() {
  const { productList } = useContext(AppCreateContext);
  console.log(productList);
  return <div>ProductPageForAllProduct</div>;
}
