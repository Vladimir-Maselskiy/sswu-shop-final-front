import React from 'react';
import { IOrderItem } from '../../interfaces/interfaces';
import { getOrderDiscount } from '../../utils/getOrderDiscount';
import { getTotalCost } from '../../utils/getTotalCost';
import './CartPrice.scss';

type TProps = {
  order: IOrderItem[];
};
export const CartPrice = ({ order }: TProps) => {
  const discount = getOrderDiscount(order);

  const totalCost = getTotalCost(order);

  return (
    <div className="cart-price">
      <p className="cart-price__total-cost">
        Total Cost <span>{`${totalCost}$`}</span>
      </p>
      <p className="cart-price__discount">
        Discount <span>{`${discount}$`}</span>
      </p>
    </div>
  );
};
