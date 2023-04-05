import React from 'react';
import { Container } from '../../components/Container/Container';
import { IOrderItem } from '../../interfaces/interfaces';
import './ThankPage.scss';


type TProps = {
    setOrder: React.Dispatch<React.SetStateAction<IOrderItem[]>>;
  };

export const ThankPage = ({setOrder}: TProps) => {
    
    localStorage.setItem('cart', JSON.stringify([]));
    setOrder([]);
  return (
    <Container className="thank-page">
      <>
        <p className="thank-page__title">Thank you for your order</p>
        <div className="thank-page__banner"></div>
      </>
    </Container>
  );
};
