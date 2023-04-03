import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { MainPage } from './MainPage/MainPage';
import { Cart } from './Cart/Cart';
import { IProduct } from '../interfaces/interfaces';
import './App.scss';
import { fetchProducts } from '../utils/api';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    fetchProducts().then(res => setProducts(res));
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage products={products} />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
