import { useWindowWidth } from '../../hooks/getWindowWidth';
import { Box } from '../Box/Box';
import { Container } from '../Container/Container';
import './Blog.scss';

export const Blog = () => {
  const { windowWidth } = useWindowWidth();
  return (
    <Container
      className="blog"
      styles={{ height: Math.max(windowWidth / 2.138, 206) }}
    >
      <>
        <p className="blog-title">News</p>
        <p className="blog-message">
          Discover weekly content about organic food, & more
        </p>

        <Box className="blog-content">
          <>
            <div className="blog__item">
              <div className="blog__item-image">
                <div className="blog__item-image-date">
                  <p>25</p>
                  <p>Nov</p>
                </div>
              </div>
              <div className="blog__item-info">
                <p className="blog-item-info__author">By Rachi Card</p>
                <p className="blog-item-info__title">
                  The Benefits of Vitamin D & How to Get It
                </p>
                <p className="blog-item-info__description">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
                <button className="blog-item-info__button">Read More</button>
              </div>
            </div>
            <div className="blog__item">
              <div className="blog__item-image">
                <div className="blog__item-image-date">
                  <p>25</p>
                  <p>Nov</p>
                </div>
              </div>
              <div className="blog__item-info">
                <p className="blog-item-info__author">By Rachi Card</p>
                <p className="blog-item-info__title">
                  Our Favourite Summertime Tommeto
                </p>
                <p className="blog-item-info__description">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
                <button className="blog-item-info__button">Read More</button>
              </div>
            </div>
          </>
        </Box>
      </>
    </Container>
  );
};
