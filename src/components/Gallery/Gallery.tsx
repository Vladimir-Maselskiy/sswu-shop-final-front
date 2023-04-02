import React from 'react';
import { Container } from '../Container/Container';
import './Gallery.scss';

export const Gallery = () => {
  const galleryItems = ['Organic Juice', 'Organic Food', 'Nuts Cookis'];
  return (
    <Container className="gallery">
      <>
        {galleryItems.map(item => (
          <div key={item} className="gallery__item">
            <p className="gallery__item-name">{item}</p>
          </div>
        ))}
      </>
    </Container>
  );
};
