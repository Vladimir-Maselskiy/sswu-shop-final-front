import { StarRate } from '../StarRate/StarRate';

type TProps = {
  className: string;
};

export const ProductCard = ({ className }: TProps) => {
  return (
    <div className={`${className}__product-card`}>
      <p className="product-card__group">Vegetable</p>
      <img
        className="product-card__image"
        src="products/mung_bean.png"
        alt="Mung Bean"
      />
      <p className="product-card__name">Mung Bean</p>
      <div className="product-card__divider"></div>
      <div className="product-card__footer">
        <div className="product-card__price-box">
          <p className="product-card__full-price">$20.00</p>
          <p className="product-card__sales-price">$11.00</p>
        </div>
        <StarRate className="product-card" rate={2.9} />
      </div>
    </div>
  );
};
