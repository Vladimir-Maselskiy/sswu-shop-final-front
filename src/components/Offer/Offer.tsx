import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { IProduct } from '../../interfaces/interfaces';
import { Box } from '../Box/Box';
import { Container } from '../Container/Container';
import { ProductCard } from '../ProductCard/ProductCard';
import './Offer.scss';

type TProps = {
  products: IProduct[];
  isLoading: boolean;
};

export const Offer = ({ products, isLoading }: TProps) => {
  const visibleProducts = products.slice(0, 4);
  return (
    <Container className="offer">
      <>
        <p className="offer__title">Offer</p>
        <p className="offer__message">We Offer Organic For You</p>
        <Box className="offer-cards">
          <>
            {!isLoading
              ? visibleProducts.map(product => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    className="offer"
                  />
                ))
              : new Array(4).fill(null).map((_, index) => (
                  <Skeleton
                    key={index}
                    style={{
                      minHeight: 455,
                      minWidth: 335,
                      borderRadius: 30,
                    }}
                  />
                ))}
          </>
        </Box>
      </>
    </Container>
  );
};
