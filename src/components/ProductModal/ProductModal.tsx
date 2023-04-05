import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { IOrderItem, IProduct } from '../../interfaces/interfaces';
import { Container } from '../Container/Container';
import { StarRate } from '../StarRate/StarRate';
import './ProductModal.scss';

type TProps = {
  product: IProduct | null;
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOrder: React.Dispatch<React.SetStateAction<IOrderItem[]>>;
};

export const ProductModal = ({ product, setIsShowModal, setOrder }: TProps) => {
  const [descriptionButtton, setDescriptionButtton] = useState<
    'default' | 'additional'
  >('default');

  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(false);

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
    description,
    _id = '';

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
      _id,
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
    if (!(e.target instanceof HTMLFormElement) || !product) {
      return;
    }
    const htmlEl = e.target.elements[0];
    if (htmlEl instanceof HTMLInputElement) {
      const value = +htmlEl.value;
      setOrder(prev => {
        const currentIndex = prev.findIndex(item => item.product._id === _id);
        if (currentIndex === -1) {
          prev.push({ product, quantity: value });
        } else {
          prev[currentIndex].quantity += value;
        }
        localStorage.setItem('cart', JSON.stringify(prev));
        return [...prev];
      });
      setIsSubmitButtonDisabled(true);
    }
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
                src={`../products${image}`}
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
                  disabled={isSubmitButtonDisabled}
                  className="modal-order-controls-box__input"
                />
                <button
                  type="submit"
                  className="modal-order-controls-box__submit"
                  disabled={isSubmitButtonDisabled}
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
