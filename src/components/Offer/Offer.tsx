import { Box } from '../Box/Box';
import { Container } from '../Container/Container';
import { ProductCard } from '../ProductCard/ProductCard';
import './Offer.scss';

export const Offer = () => {
  return (
    <Container className="offer">
      <>
        <p className="offer__title">Offer</p>
        <p className="offer__message">We Offer Organic For You</p>
        <Box className="offer-cards">
          <>
            <ProductCard className="offer" />
            <ProductCard className="offer" />
            <ProductCard className="offer" />
            <ProductCard className="offer" />
          </>
        </Box>
      </>
    </Container>
  );
};
