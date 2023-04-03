import React, { useState, useEffect } from 'react';
import { IProduct } from '../../interfaces/interfaces';
import { Box } from '../Box/Box';
import { Container } from '../Container/Container';
import { ProductCard } from '../ProductCard/ProductCard';
import './Products.scss';

type TProps = {
  products: IProduct[];
};

export const Products = ({ products }: TProps) => {
  const [visibleProducts, setVisibleProducts] = useState<IProduct[]>([]);
  const [isShowWithDiscount, setIsShowWithDiscount] = useState(false);

  useEffect(() => {
    if (isShowWithDiscount) {
      setVisibleProducts(
        products.filter(product => product.discount > 0).slice(0, 8)
      );
    } else setVisibleProducts(products);
  }, [isShowWithDiscount, products]);

  return (
    <Container className="products">
      <>
        <p className="products__title">Categories</p>
        <p className="products__message">Our Products</p>
        <Box className="products-cards">
          <>
            {visibleProducts.map(product => (
              <ProductCard
                key={product._id}
                product={product}
                className="products"
              />
            ))}
          </>
        </Box>
      </>
    </Container>
  );
};
