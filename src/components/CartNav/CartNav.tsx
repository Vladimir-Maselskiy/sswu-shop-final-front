import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { IOrderItem } from '../../interfaces/interfaces';
import './CartNav.scss';

type TProps = {
  order: IOrderItem[];
};

export const CartNav = ({ order }: TProps) => {
  const quantity = order.reduce(
    (acc, orderItem) => acc + orderItem.quantity,
    0
  );

  return (
    <NavLink to="/cart">
      <div className="header-cart">
        <p
          className={clsx('header-cart__title', {
            red: quantity > 0,
          })}
        >
          Cart<span>{` (${quantity})`}</span>
        </p>
        <p className="header-cart__badge">{quantity}</p>
        <div className="header-cart__icon"></div>
      </div>
    </NavLink>
  );
};
