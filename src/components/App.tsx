import { Route, Routes } from 'react-router-dom';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import './App.scss';
import { MainPage } from './MainPage/MainPage';
import { Cart } from './Cart/Cart';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
