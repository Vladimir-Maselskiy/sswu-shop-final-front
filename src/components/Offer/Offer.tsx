import { useState } from 'react';
import { IProduct } from '../../interfaces/interfaces';
import { Box } from '../Box/Box';
import { Container } from '../Container/Container';
import { ProductCard } from '../ProductCard/ProductCard';
import './Offer.scss';

type TProps = {
  products: IProduct[];
};

export const Offer = ({ products }: TProps) => {
  const [visibleProducts, setVisibleProducts] = useState<IProduct[]>([]);
  return (
    <Container className="offer">
      <>
        <p className="offer__title">Offer</p>
        <p className="offer__message">We Offer Organic For You</p>
        <Box className="offer-cards">
          <>
            {visibleProducts.map(product => (
              <ProductCard
                key={product._id}
                product={product}
                className="offer"
              />
            ))}
          </>
        </Box>
      </>
    </Container>
  );
};
