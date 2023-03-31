import React from 'react';
import { useWindowWidth } from '../../hooks/getWindowWidth';
import { Box } from '../Box/Box';
import { Container } from '../Container/Container';
import avatar from '../../images/feedback-slider-user.png';
import './FeedBacks.scss';
import clsx from 'clsx';

export const FeedBacks = () => {
  const { windowWidth } = useWindowWidth();
  const starsItems = new Array(5).fill(null);
  const bulletItems = new Array(3).fill(null);
  const advantageItems = [
    { value: '100%', name: 'Organic' },
    { value: '285', name: 'Active Product' },
    { value: '350+', name: 'Organic Orchads' },
    { value: '25+', name: 'Years of Farming' },
  ];
  return (
    <Container
      className="feedback"
      styles={{ height: Math.max(windowWidth * 0.66, 290) }}
    >
      <Box className="feedback">
        <>
          <p className="feedback__title">Testimonial</p>
          <p className="feedback__message">What Our Customer Saying?</p>
          <div className="feedback slider-item">
            <img
              //   src="../../images/feedback-slider-user.png"
              src={avatar}
              alt="sara-teylor-avatar"
              className="slider-item__avatar"
            />
            <div className="slider-item__star-rate-container">
              {starsItems.map((_, index) => {
                return (
                  <div key={index} className="slider-item__star-item"></div>
                );
              })}
            </div>
            <p className="slider-item__description">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </p>
            <p className="slider-item__user-name">Sara Taylor</p>
            <p className="slider-item__user-status">Consumer</p>
            <div className="slider-item__bullets-container">
              {bulletItems.map((_, index) => {
                return (
                  <div
                    key={index}
                    className={clsx('slider-item__bullet', {
                      activ: index === 1,
                    })}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="feedback-divider"></div>
          <div className="feedback__advantage-container">
            {advantageItems.map(({ value, name }) => {
              return (
                <div key={name} className="feedback__advantage-item-outline">
                  <div className="feedback__advantage-item">
                    <p className="feedback__advantage-number-value">{value}</p>
                    <p className="feedback__advantage-number-name">{name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      </Box>
    </Container>
  );
};
