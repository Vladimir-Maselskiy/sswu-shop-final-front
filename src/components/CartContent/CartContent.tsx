import React from 'react';
import { IOrderItem } from '../../interfaces/interfaces';
import { CartItem } from '../CartItem/CartItem';
import { Container } from '../Container/Container';
import './CartContent.scss';

type TProps = {
  order: IOrderItem[];
  setOrder: React.Dispatch<React.SetStateAction<IOrderItem[]>>;
};
export const CartContent = ({ order, setOrder }: TProps) => {
  return (
    <Container className="cart-content">
      <>
        {order.map(item => (
          <CartItem key={item.product._id} item={item}></CartItem>
        ))}
      </>
    </Container>
  );
};
