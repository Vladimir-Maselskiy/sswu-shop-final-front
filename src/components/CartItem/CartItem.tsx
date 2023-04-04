import React from 'react';
import { IOrderItem } from '../../interfaces/interfaces';
import './CartItem.scss';

type TProps = {
  item: IOrderItem;
};

export const CartItem = ({ item }: TProps) => {
  const { product, quantity } = item;
  const { image, name, price, discount, _id } = product;
  const priceWithDiscount =
    discount && discount > 0 ? (price * (1 - discount / 100)).toFixed(2) : null;
  return (
    <div className="cart-item">
      <img src={`../products${image}`} className="cart-item__image" />
      <div className="cart-item__text-box">
        <p className="cart-item__name">{name}</p>
        {priceWithDiscount && (
          <p className="cart-item__full-price">{`$${price.toFixed(2)}`}</p>
        )}
        <p className="cart-item__sales-price">
          {`$${priceWithDiscount || price.toFixed(2)}`}
        </p>
        <div className="cart-item__controls-fields-box">
          <label htmlFor={`${_id}`} className="cart-item__label">
            Quantity :
          </label>
          <input id={`${_id}`} value={quantity} className="cart-item__input" />
          <button className="cart-close-button">X</button>
        </div>
      </div>
    </div>
  );
};
