import React, { useState, useEffect } from 'react';
import { IOrderItem, IProduct } from '../../interfaces/interfaces';
import { Box } from '../Box/Box';
import { Container } from '../Container/Container';
import { ProductCard } from '../ProductCard/ProductCard';
import { ProductModal } from '../ProductModal/ProductModal';
import './Products.scss';

type TProps = {
  products: IProduct[];
  setOrder: React.Dispatch<React.SetStateAction<IOrderItem[]>>;
};

export const Products = ({ products, setOrder }: TProps) => {
  const [visibleProducts, setVisibleProducts] = useState<IProduct[]>([]);
  const [isShowWithDiscount, setIsShowWithDiscount] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<IProduct | null>(null);

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
                setIsShowModal={setIsShowModal}
                setCurrentProduct={setCurrentProduct}
              />
            ))}
          </>
        </Box>
        {isShowModal && (
          <ProductModal
            product={currentProduct}
            setIsShowModal={setIsShowModal}
            setOrder={setOrder}
          />
        )}
      </>
    </Container>
  );
};
