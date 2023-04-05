import React, { useState } from 'react';
import { IOrderItem } from '../../../interfaces/interfaces';
import './CartItem.scss';

type TProps = {
  item: IOrderItem;
  setOrder: React.Dispatch<React.SetStateAction<IOrderItem[]>>;
};

export const CartItem = ({ item, setOrder }: TProps) => {
  const { product, quantity } = item;
  const { image, name, price, discount, _id } = product;

  const [inputValue, setInputValue] = useState<string | number>(quantity);
  const priceWithDiscount =
    discount && discount > 0 ? (price * (1 - discount / 100)).toFixed(2) : null;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onInputBlur = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    setOrder(prev => {
      const item = prev.find(item => item.product._id === id)!;
      let value = inputValue;
      if (value > 100) value = 100;
      if (value < 1 || isNaN(+value)) value = 1;
      item.quantity = +value;
      setInputValue(value);
      return [...prev];
    });
  };

  const onRemoveItemClick = (id: string) => {
    setOrder(prev => {
      const newCart = prev.filter(item => item.product._id !== id);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };
  return (
    <div className="cart-item">
      <img src={`../products${image}`} className="cart-item__image" />
      <div className="cart-item__text-box">
        <div className='cart-item__name-and-price'>
          <p className="cart-item__name">{name}</p>
          {priceWithDiscount && (
            <p className="cart-item__full-price">{`$${price.toFixed(2)}`}</p>
          )}
          <p className="cart-item__sales-price">
            {`$${priceWithDiscount || price.toFixed(2)}`}
          </p>
        </div>
        <div className="cart-item__controls-fields-box">
          <label htmlFor={`${_id}`} className="cart-item__label">
            Quantity :
          </label>
          <input
            className="cart-item__input"
            id={`${_id}`}
            value={inputValue}
            onChange={onInputChange}
            onBlur={e => onInputBlur(e, _id)}
          />
          <button
            className="cart-item__remove-button"
            onClick={() => onRemoveItemClick(_id)}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};
