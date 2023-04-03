import { useWindowWidth } from '../../hooks/getWindowWidth';
import { Box } from '../Box/Box';
import { Container } from '../Container/Container';
import './Blog.scss';

export const Blog = () => {
  return (
    <Container className="blog">
      <>
        <p className="blog__title">News</p>
        <div className="blog__message-box">
          <p className="blog__message">
            Discover weekly content about organic food, & more
          </p>
          <button className="blog__more-news-button">More News</button>
        </div>

        <Box className="blog__content">
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
