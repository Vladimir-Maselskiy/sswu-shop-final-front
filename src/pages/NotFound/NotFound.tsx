import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import { useWindowWidth } from '../../hooks/getWindowWidth';
import src from '../../images/404.png';
import './NotFound.scss';

export const NotFound = () => {
  const { windowWidth } = useWindowWidth();
  const navigate = useNavigate();
  const onNavigateButtonClick = () => {
    navigate('/');
  };
  return (
    <Container
      className="not-found"
      styles={{ height: Math.max(windowWidth * 0.47, 500) }}
    >
      <div className="not-found-info">
        <img className="not-found-info__image404" src={src} alt="404" />
        <p className="not-found-info__message">Page not found</p>
        <p className="not-found-info__description">
          The page you are looking for doesn't exist or has been moved
        </p>
        <button
          className="not-found-info__button"
          onClick={onNavigateButtonClick}
        >
          Go to Homepage
        </button>
      </div>
    </Container>
  );
};
