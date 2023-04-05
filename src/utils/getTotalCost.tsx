import { IOrderItem } from '../interfaces/interfaces';
import { getOrderDiscount } from './getOrderDiscount';

export const getTotalCost = (order: IOrderItem[]) => {
  return (
    order.reduce((acc, item) => acc + item.product.price * item.quantity, 0) -
    getOrderDiscount(order)
  );
};
