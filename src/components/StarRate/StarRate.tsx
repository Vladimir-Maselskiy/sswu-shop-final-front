import React from 'react';
import { ReactComponent as StarSVG } from '../../images/star-rate.svg';
import { ReactComponent as StarSVG3 } from '../../images/star-rate-3.svg';
type TProps = {
  className: string;
  rate: number;
};

export const StarRate = ({ className, rate }: TProps) => {
  const starsItems = new Array(5).fill(null);
  return (
    <div className={`${className}__star-rate-container`}>
      {starsItems.map((_, index) => {
        const gradientID =
          rate - index > 0.75 ? 3 : rate - index > 0.25 ? 2 : 1;
        return (
          <StarSVG3
            key={index}
            className={`${className}__star-item`}
            fill={`url(#Gradient${gradientID})`}
          />
        );
      })}
    </div>
  );
};
