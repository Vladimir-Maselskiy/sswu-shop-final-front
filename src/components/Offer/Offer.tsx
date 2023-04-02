import React from 'react';
import { Box } from '../Box/Box';
import { Container } from '../Container/Container';
import { ProductCard } from '../ProductCard/ProductCard';
import './Offer.scss';

export const Offer = () => {
  return (
    <Container className="offer">
      <>
        <p className="offer__title">Offer</p>
        <p className="offer__message">We Offer Organic For You</p>
        <Box className="cards">
          <>
            <ProductCard className="offer" />
          </>
        </Box>
      </>
    </Container>
  );
};
