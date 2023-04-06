import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { IOrderItem, IProduct } from '../../interfaces/interfaces';
import { Box } from '../Box/Box';
import { Container } from '../Container/Container';
import { ProductCard } from '../ProductCard/ProductCard';
import { ProductModal } from '../ProductModal/ProductModal';
import './Products.scss';

type TProps = {
  products: IProduct[];
  setOrder: React.Dispatch<React.SetStateAction<IOrderItem[]>>;
  isLoading: boolean;
};

export const Products = ({ products, setOrder, isLoading }: TProps) => {
  const [visibleProducts, setVisibleProducts] = useState<IProduct[]>([]);
  const [isShowWithDiscount, setIsShowWithDiscount] = useState(true);
  const [isShowModal, setIsShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    if (isShowWithDiscount) {
      setVisibleProducts(
        products.filter(product => product.discount > 0).slice(0, 8)
      );
    } else setVisibleProducts(products);
  }, [isShowWithDiscount, products]);

  const onFilterButtonClick = () => {
    setIsShowWithDiscount(prev => !prev);
    console.log('click');
  };

  return (
    <Container className="products">
      <>
        <p className="products__title">Categories</p>
        <p className="products__message">Our Products</p>
        <Box className="products-cards">
          <>
            {!isLoading
              ? visibleProducts.map(product => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    className="products"
                    setIsShowModal={setIsShowModal}
                    setCurrentProduct={setCurrentProduct}
                  />
                ))
              : new Array(8)
                  .fill(null)
                  .map((_, index) => (
                    <Skeleton
                      key={index}
                      style={{
                        minHeight: 455,
                        minWidth: 335,
                        borderRadius: 30,
                      }}
                    />
                  ))}
          </>
        </Box>
        <button
          className="products__filter-button"
          type="button"
          onClick={onFilterButtonClick}
        >
          {isShowWithDiscount ? 'Load More' : 'Hide All'}
        </button>
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
