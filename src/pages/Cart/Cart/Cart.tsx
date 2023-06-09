import React from 'react';
import { IOrderItem } from '../../../interfaces/interfaces';
import { CartBanner } from '../CartBanner/CartBanner';
import { Container } from '../../../components/Container/Container';
import { CartContent } from '../CartContent/CartContent';

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
