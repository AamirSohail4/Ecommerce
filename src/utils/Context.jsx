import { createContext, useEffect, useState } from 'react';
import { fetchDataFromApi } from './Api';

export const AppCreateContext = createContext();

export const AppContextProdvider = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState([]);
  const [cartSubTotal, setCartSubTotal] = useState([]);

  useEffect(() => {
    let cartCount = 0;
    cartItems.map((item) => (cartCount += item.attributes.quntity));
    setCartCount(cartCount);

    let SubTotal = 0;
    cartItems.map(
      (item) => (SubTotal += item.attributes.price * item.attributes.quntity)
    );
    setCartSubTotal(SubTotal);
  }, [cartItems]);

  const handelAddToCard = (product, quntity) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      items[index].attribute.quntity = quntity;
    } else {
      product.attributes.quntity = quntity;
      items = [...items, product];
    }
    setCartItems(items);
  };
  // console.log('handleaddtocart', cartItems);
  // console.log(cartItems);

  const handelRemoveFromCard = (product) => {
    let items = [...cartItems];
    items = items.filter((p) => p.id !== product.id);
    setCartItems(items); //shelow items of our product;
  };

  const handelCardProductQuanity = (type, product) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    // console.log('item index ==>', index);
    if (type === 'increment') {
      items[index].attributes.quntity += 1;
      setCartItems(items);
    } else if (type === 'decrement') {
      if (items[index].attributes.quntity === 1) return;
      items[index].attributes.quntity -= 1;
    }
    setCartItems(items);
  };

  useEffect(() => {
    getCategory();
    getProduct();
  }, []);

  const getCategory = () => {
    fetchDataFromApi('/api/categories?populate=*').then((res) => {
      // console.log(res);
      setCategoryList(res);
    });
  };

  const getProduct = () => {
    fetchDataFromApi('/api/products?populate=*').then((res) => {
      setProductList(res);
    });
  };

  return (
    <AppCreateContext.Provider
      value={{
        categoryList,
        productList,
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        cartSubTotal,
        setCartSubTotal,
        handelAddToCard,
        handelRemoveFromCard,
        handelCardProductQuanity,
      }}
    >
      {children}
    </AppCreateContext.Provider>
  );
};
