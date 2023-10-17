/* eslint-disable react-hooks/exhaustive-deps */
import './Home.scss';
import Banner from './Banner/Banner';

import { Products } from '../Products/ProductsPage';
import HomePageCategory from './HomePageCategory/HomePageCategory';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className='main-content'>
        <div className='layout'>
          <HomePageCategory />
          <Products headingText='Popoler Products' />
        </div>
      </div>
    </div>
  );
};

export default Home;
