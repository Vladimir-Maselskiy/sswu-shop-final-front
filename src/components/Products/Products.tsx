import React from 'react';
import { Box } from '../Box/Box';
import { Container } from '../Container/Container';
import { ProductCard } from '../ProductCard/ProductCard';

export const Products = () => {
  return (
    <Container className="products">
      <>
        <p className="products__title">Categories</p>
        <p className="products__message">Our Products</p>
        <Box className="products-cards">
          <>
            <ProductCard className="offer" />
            <ProductCard className="offer" />
            <ProductCard className="offer" />
            <ProductCard className="offer" />
          </>
        </Box>
      </>
    </Container>
  );
};
