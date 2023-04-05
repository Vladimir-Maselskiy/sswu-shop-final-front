import React, { useEffect, useState } from 'react';
import { IOrderItem } from '../../interfaces/interfaces';
import { CartBanner } from '../CartBanner/CartBanner';
import { CartContent } from '../CartContent/CartContent';
import { Container } from '../Container/Container';

type TProps = {
  order: IOrderItem[];
  setOrder: React.Dispatch<React.SetStateAction<IOrderItem[]>>;
};
export const Cart = ({ order, setOrder }: TProps) => {
  const [currentOrder, setCurrentOrder] = useState(order);
  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (order.length === 0 && cart) {
      console.log('hi');
      setCurrentOrder(JSON.parse(cart));
    }
  }, []);
  return (
    <Container className="cart">
      <>
        <CartBanner />
        <CartContent order={currentOrder} setOrder={setOrder} />
      </>
    </Container>
  );
};
