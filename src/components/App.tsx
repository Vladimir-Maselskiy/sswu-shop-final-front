import { About } from './About/About';
import './App.scss';
import { Banner } from './Banner/Banner';
import { Header } from './Header/Header';
import { OfferBanner } from './OfferBanner/OfferBanner';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <OfferBanner />
      <About />
    </>
  );
}

export default App;
