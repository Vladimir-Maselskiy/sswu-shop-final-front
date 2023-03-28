import { useWindowWidth } from '../../hooks/getWindowWidth';
import { Container } from '../Container/Container';
import './About.scss';

export const About = () => {
  const { windowWidth } = useWindowWidth();

  return (
    <Container
      className="about"
      styles={{ height: Math.max(windowWidth * 0.56, 246) }}
    >
      <>
        <div className="about-background-tumb"></div>
        <div className="about-info">
          <p className="about-info__title">About Us</p>
          <p className="about-info__message">
            We Believe in Working Accredited Farmers
          </p>
          <p className="about-info__description">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className="about-info__item">
            <div className="about-info___item-image"></div>
            <div className="about-info___item-text-block">
              <p className="about-info__item-message">Organic Foods Only</p>
              <p className="about-info__item-description">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
            </div>
          </div>
          <div className="about-info__item">
            <div className="about-info___item-image"></div>
            <div className="about-info___item-text-block">
              <p className="about-info__item-message">Organic Foods Only</p>
              <p className="about-info__item-description">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
            </div>
          </div>
          <button className="about-info__button">Shop Now</button>
        </div>
      </>
    </Container>
  );
};
