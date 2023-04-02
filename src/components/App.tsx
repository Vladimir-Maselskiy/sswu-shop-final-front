import { About } from './About/About';
import './App.scss';
import { Banner } from './Banner/Banner';
import { FeedBacks } from './FeedBacks/FeedBacks';
import { Header } from './Header/Header';
import { Offer } from './Offer/Offer';
import { OfferBanner } from './OfferBanner/OfferBanner';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <OfferBanner />
      <About />
      {/* <Products /> */}
      <FeedBacks />
      <Offer />
    </>
  );
}

export default App;
