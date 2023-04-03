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
import { IProduct } from '../../interfaces/interfaces';

type TProps = {
  products: IProduct[];
};

export const MainPage = ({ products }: TProps) => {
  return (
    <>
      <Banner />
      <OfferBanner />
      <About />
      <Products products={products}/>
      <FeedBacks />
      <Offer products={products}/>
      <EcoFriendly />
      <Gallery />
      <Blog />
      <Newsletter />
    </>
  );
};
