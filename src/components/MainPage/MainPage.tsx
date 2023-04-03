import React from 'react';
import { About } from '../About/About';
import { Banner } from '../Banner/Banner';
import { Blog } from '../Blog/Blog';
import { EcoFriendly } from '../EcoFriendly/EcoFriendly';
import { FeedBacks } from '../FeedBacks/FeedBacks';
import { Gallery } from '../Gallery/Gallery';
import { Newsletter } from '../Newsletter/Newsletter';
import { Offer } from '../Offer/Offer';
import { OfferBanner } from '../OfferBanner/OfferBanner';
import { Products } from '../Products/Products';

export const MainPage = () => {
  return (
    <>
      <Banner />
      <OfferBanner />
      <About />
      <Products />
      <FeedBacks />
      <Offer />
      <EcoFriendly />
      <Gallery />
      <Blog />
      <Newsletter />
    </>
  );
};