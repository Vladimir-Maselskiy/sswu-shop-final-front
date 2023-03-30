import { About } from './About/About';
import './App.scss';
import { Banner } from './Banner/Banner';
import { FeedBacks } from './FeedBacks/FeedBacks';
import { Header } from './Header/Header';
import { OfferBanner } from './OfferBanner/OfferBanner';
import { Products } from './Products/Products';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <OfferBanner />
      <About />
      <Products />
      <FeedBacks />
    </>
  );
}

export default App;
