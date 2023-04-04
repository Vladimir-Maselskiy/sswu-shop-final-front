import React, { useState } from 'react';
import { IProduct } from '../../interfaces/interfaces';
import { Container } from '../Container/Container';
import { StarRate } from '../StarRate/StarRate';
import './ProductModal.scss';

type TProps = {
  product: IProduct;
};

export const ProductModal = ({ product }: TProps) => {
  const [descriotionContent, setDescriotionContent] = useState(
    product.description
  );
  const { image, group, name, rate, discount, price, mainProductInfo } =
    product;
  const priceWithDiscount =
    discount > 0 ? (price * (1 - discount / 100)).toFixed(2) : null;
  return (
    <Container className="modal">
      <>
        <div className="modal__main-box">
          <div className="modal__image-box">
            <img src={`products${image}`} alt={name} className="modal__image" />
            <p className="modal__product-group">{group}</p>
          </div>
          <div className="modal__product-info-box">
            <div className="modal-product__name">{name}</div>
            <StarRate className="modal" rate={rate} />
            <div className="modal-product__price-box">
              {priceWithDiscount && (
                <p className="modal-product__full-price">{price.toFixed(2)}</p>
              )}
              <p className="modal-product__sales-price">
                {priceWithDiscount || price}
              </p>
            </div>
            <p className="modal-product__main-info">{mainProductInfo}</p>
            <form className="modal-order-form">
              <label
                htmlFor="product-quantity"
                className="modal-order-controls-box__label"
              >
                Quantity :
              </label>
              <input
                id="product-quantity"
                type="number"
                min={1}
                max={100}
                defaultValue={1}
                required
                className="modal-order-controls-box__input"
              />
              <button
                type="submit"
                className="modal-order-controls-box__submit"
              >
                Add To Card
              </button>
            </form>
          </div>
          <div className="modal__product-description-box">
            <div className="modal__buttons-box">
              <button className="modal__descriotion-button">
                Product Description
              </button>
              <button className="modal__additional-button">
                Additional Info
              </button>
            </div>
            <p className="modal__descriotion-content">{descriotionContent}</p>
          </div>
        </div>
      </>
    </Container>
  );
};
