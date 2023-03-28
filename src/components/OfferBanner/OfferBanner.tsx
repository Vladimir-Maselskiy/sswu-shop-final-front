import React from 'react';
import { useWindowWidth } from '../../hooks/getWindowWidth';
import { Container } from '../Container/Container';
import './OfferBanner.scss';

export const OfferBanner = () => {
  const { windowWidth } = useWindowWidth();
  return (
    <Container
      className="offer-banner"
      styles={{ height: Math.max(windowWidth * 0.19, 91) }}
    >
      <>
        <div className="offer-banner-item">
          <div className="offer-banner-item__box">
            <p className="offer-banner-info__title">Natural!!</p>
            <p className="offer-banner-info__message">
              Get Garden Fresh Fruits
            </p>
          </div>
        </div>
        <div className="offer-banner-item">
          <div className="offer-banner-item__box">
            <p className="offer-banner-info__title">Offer!!</p>
            <p className="offer-banner-info__message">
              Get 10% off on Vegetables
            </p>
          </div>
        </div>
      </>
    </Container>
  );
};
