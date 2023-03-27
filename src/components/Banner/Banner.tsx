import { useWindowWidth } from '../../hooks/getWindowWidth';
import { Container } from '../Container/Container';
import './Banner.scss';

export const Banner = () => {
  const { windowWidth } = useWindowWidth();
  return (
    <Container
      className="banner"
      styles={{ height: Math.max(windowWidth / 2.138, 206) }}
    >
      <div className="banner-info">
        <p className="banner-info__title">100% Natural Food</p>
        <p className="banner-info__message">
          Choose the best healthier way of life
        </p>
        <button className="banner-info__button">Explore Now</button>
      </div>
    </Container>
  );
};
