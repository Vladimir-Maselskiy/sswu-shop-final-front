import './CartNav.scss';

type TProps = {
  quantity?: number;
};

export const CartNav = ({ quantity = 0 }: TProps) => {
  return (
    <div className="header-cart">
      <p className="header-cart__title">Cart{` (${quantity})`}</p>
      <div className="header-cart__icon"></div>
    </div>
  );
};
