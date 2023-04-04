import React from 'react';
import { Container } from '../Container/Container';
import './CartBanner.scss';

export const CartBanner = () => {
  return (
    <Container className="cart-banner">
      <>
        <p className="cart-banner__title">Cart</p>
      </>
    </Container>
  );
};
