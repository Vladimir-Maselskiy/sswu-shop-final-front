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
import { IOrderItem, IProduct } from '../../interfaces/interfaces';

type TProps = {
  products: IProduct[];
  setOrder: React.Dispatch<React.SetStateAction<IOrderItem[]>>;
  isLoading: boolean;
};

export const MainPage = ({ products, setOrder, isLoading }: TProps) => {
  return (
    <>
      <Banner />
      <OfferBanner />
      <About />
      <Products products={products} setOrder={setOrder} isLoading={isLoading} />
      <FeedBacks />
      <Offer products={products} isLoading={isLoading} />
      <EcoFriendly />
      <Gallery />
      <Blog />
      <Newsletter />
    </>
  );
};
