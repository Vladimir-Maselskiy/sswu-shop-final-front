import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { IProduct } from '../../interfaces/interfaces';
import { Container } from '../Container/Container';
import { StarRate } from '../StarRate/StarRate';
import './ProductModal.scss';

type TProps = {
  product: IProduct | null;
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ProductModal = ({ product, setIsShowModal }: TProps) => {
  const [descriptionButtton, setDescriptionButtton] = useState<
    'default' | 'additional'
  >('default');

  const onBackDropClick = (e: any) => {
    if (e.target instanceof HTMLDivElement) {
      if (e.target.classList.value === 'modal-section') {
        setIsShowModal(false);
      }
    }
  };

  const onKeyDownWithModal = (e: KeyboardEvent) => {
    if (e.key === 'Escape') setIsShowModal(false);
  };

  useEffect(() => {
    const rootRef = document.getElementById('root');
    rootRef?.addEventListener('click', onBackDropClick);
    window.addEventListener('keydown', onKeyDownWithModal);
    return () => {
      window.removeEventListener('keydown', onKeyDownWithModal);
      rootRef?.removeEventListener('click', onBackDropClick);
    };
  }, []);
  let image,
    group,
    name,
    rate = 0,
    discount,
    price = 0,
    mainProductInfo,
    additionalInfo,
    description;
  //     if (product) {
  //        const  {image, group,
  //     name,
  //     rate,
  //     discount,
  //     price,
  //     mainProductInfo,
  //     additionalInfo,
  //     description
  // } = product
  // }
  if (product) {
    ({
      image,
      group,
      name,
      rate,
      discount,
      price,
      mainProductInfo,
      additionalInfo,
      description,
    } = product);
  }
  const priceWithDiscount =
    discount && discount > 0 ? (price * (1 - discount / 100)).toFixed(2) : null;

  const onDescriptionButtonClick: React.MouseEventHandler<
    HTMLButtonElement
  > = e => {
    if (!(e.target instanceof HTMLButtonElement)) {
      return;
    }
    const value = e.target.dataset.payload as 'default' | 'additional';
    setDescriptionButtton(value);
  };

  const onFormSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    if (!(e.target instanceof HTMLFormElement)) {
      return;
    }
    const htmlEl = e.target.elements[0];
    if (htmlEl instanceof HTMLInputElement) console.log(htmlEl.value);
  };

  const onCloseButtonClick = () => {
    setIsShowModal(false);
  };
  return (
    product && (
      <Container className="modal">
        <>
          <div className="modal__main-box">
            <div className="modal__image-box">
              <img
                src={`products${image}`}
                alt={name}
                className="modal__image"
              />
              <p className="modal__product-group">{group}</p>
            </div>
            <div className="modal__product-info-box">
              <div className="modal-product__name">{name}</div>
              <StarRate className="modal" rate={rate} />
              <div className="modal-product__price-box">
                {priceWithDiscount && (
                  <p className="modal-product__full-price">{`$${price.toFixed(
                    2
                  )}`}</p>
                )}
                <p className="modal-product__sales-price">
                  {`$${priceWithDiscount || price.toFixed(2)}`}
                </p>
              </div>
              <p className="modal-product__main-info">{mainProductInfo}</p>
              <form onSubmit={onFormSubmit} className="modal-order-form">
                <label
                  htmlFor="product-quantity"
                  className="modal-order-controls-box__label"
                >
                  Quantity :
                </label>
                <input
                  id="product-quantity"
                  type="number"
                  name="quantity"
                  min={1}
                  max={100}
                  defaultValue={1}
                  required
                  // disabled={true}
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
                <button
                  className={clsx('modal__descriotion-button', {
                    activ: descriptionButtton === 'default',
                  })}
                  data-payload="default"
                  onClick={onDescriptionButtonClick}
                >
                  Product Description
                </button>
                <button
                  className={clsx('modal__additional-button', {
                    activ: descriptionButtton === 'additional',
                  })}
                  data-payload="additional"
                  onClick={onDescriptionButtonClick}
                >
                  Additional Info
                </button>
              </div>
              <p className="modal__descriotion-content">
                {descriptionButtton === 'default'
                  ? description
                  : additionalInfo}
              </p>
            </div>
            <button
              type="button"
              className="modal__close-button"
              onClick={onCloseButtonClick}
            >
              X
            </button>
          </div>
        </>
      </Container>
    )
  );
};
