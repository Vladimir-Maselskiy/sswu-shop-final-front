import React, { useState } from 'react';
import { Container } from '../Container/Container';
import './Newsletter.scss';

export const Newsletter = () => {
  const [value, setValue] = useState('');
  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setValue(e.target.value);
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    setValue('');
  };
  return (
    <Container className="newsletter" styles={{ height: '323px' }}>
      <form className="newsletter__form" onSubmit={onSubmit}>
        <input
          className="newsletter__input"
          placeholder="Your Email Address"
          type="email"
          name="email"
          required
          onChange={onInputChange}
          value={value}
        />
        <button className="newsletter__button" type="submit">
          Subscribe
        </button>
      </form>
    </Container>
  );
};
