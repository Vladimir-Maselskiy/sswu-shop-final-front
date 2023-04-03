import { About } from './About/About';
import './App.scss';
import { Banner } from './Banner/Banner';
import { Blog } from './Blog/Blog';
import { EcoFriendly } from './EcoFriendly/EcoFriendly';
import { FeedBacks } from './FeedBacks/FeedBacks';
import { Gallery } from './Gallery/Gallery';
import { Header } from './Header/Header';
import { Newsletter } from './Newsletter/Newsletter';
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
      <EcoFriendly />
      <Gallery />
      <Blog />
      <Newsletter />
    </>
  );
}

export default App;
