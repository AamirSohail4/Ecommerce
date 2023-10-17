import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import { Products } from './components/Products/ProductsPage';
import SingleProduct from './components/Singleproducts/SingleProduct';
import Newsletter from './components/Footer/Newsletter/Newsletter';
import Category from './components/Category/CategoryPage';
import { AppContextProdvider } from './utils/Context';

import { Layout } from './layout/Layout';
import ProductPageForAllProduct from './Pages/ProductPageForAllProduct';
import { useEffect } from 'react';
import Test from './components/Header/Search/Test';

// const ScrollToTop = (props) => {
//   const location = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location]);
//   // eslint-disable-next-line react/prop-types
//   return <>{props.children}</>;
// };

export default function App() {
  return (
    <AppContextProdvider>
      {/* <ScrollToTop> */}
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='category/:id' element={<Category />} />
          <Route path='products' element={<ProductPageForAllProduct />} />
          <Route path='products/:id' element={<Products />} />
          <Route path='SingleProduct/:id' element={<SingleProduct />} />
          <Route path='test' element={<Test />} />
        </Route>
      </Routes>
      <Newsletter />
      <Footer />
      {/* </ScrollToTop> */}
    </AppContextProdvider>
  );
}
