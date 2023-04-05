import React from 'react';
import { IOrderItem } from '../../interfaces/interfaces';
import { CartBanner } from '../CartBanner/CartBanner';
import { CartContent } from '../CartContent/CartContent';
import { Container } from '../Container/Container';

type TProps = {
  order: IOrderItem[];
  setOrder: React.Dispatch<React.SetStateAction<IOrderItem[]>>;
};
export const Cart = ({ order, setOrder }: TProps) => {
  return (
    <Container className="cart">
      <>
        <CartBanner />
        <CartContent order={order} setOrder={setOrder} />
      </>
    </Container>
  );
};
