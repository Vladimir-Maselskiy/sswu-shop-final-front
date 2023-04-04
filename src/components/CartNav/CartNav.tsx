import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();
  return (
    <div className="header-cart" onClick={() => navigate('/cart')}>
      <p className="header-cart__title">Cart{` (${quantity})`}</p>
      <p className="header-cart__badge">{quantity}</p>
      <div className="header-cart__icon"></div>
    </div>
  );
};
