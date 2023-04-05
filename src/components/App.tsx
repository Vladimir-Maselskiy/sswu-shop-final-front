import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { MainPage } from './MainPage/MainPage';
import { Cart } from './Cart/Cart';
import { IOrderItem, IProduct } from '../interfaces/interfaces';
import './App.scss';
import { fetchProducts } from '../utils/api';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [order, setOrder] = useState<IOrderItem[]>([]);
  useEffect(() => {
    fetchProducts().then(res => setProducts(res));
  }, []);

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      setOrder(JSON.parse(cart));
    }
  }, []);
  return (
    <>
      <Header order={order} />
      <Routes>
        <Route
          path="/"
          element={<MainPage products={products} setOrder={setOrder} />}
        ></Route>
        <Route
          path="/cart"
          element={<Cart order={order} setOrder={setOrder} />}
        ></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
