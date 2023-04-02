import React from 'react';
import { useWindowWidth } from '../../hooks/getWindowWidth';
import { Container } from '../Container/Container';
import './EcoFriendly.scss';

export const EcoFriendly = () => {
  const { windowWidth } = useWindowWidth();
  return (
    <Container
      className="eco-friendly"
      styles={{ height: Math.max(windowWidth * 0.48, 780) }}
    >
      <>
        <div className="eco-friendly__image"></div>
        <div className="eco-friendly__info">
          <p className="eco-friendly__title">Eco Friendly</p>
          <p className="eco-friendly__message">
            Econis is a Friendly Organic Store
          </p>
          <ul className="eco-friendly__list">
            <li className="eco-friendly__item">
              <p className="eco-friendly__item-title">
                Start with Our Company First
              </p>
              <p className="eco-friemdly__item-description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </li>
            <li className="eco-friendly__item">
              <p className="eco-friendly__item-title">
                Learn How to Grow Yourself
              </p>
              <p className="eco-friemdly__item-description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </li>
            <li className="eco-friendly__item">
              <p className="eco-friendly__item-title">
                Farming Strategies of Today
              </p>
              <p className="eco-friemdly__item-description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </li>
          </ul>
        </div>
      </>
    </Container>
  );
};
