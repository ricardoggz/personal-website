import React from 'react';
import { ButtonWrapper } from './button.elements';

export const Button = ({title, url, target }) => {
  return (
      <ButtonWrapper href={url} target={target}>
          {title}
      </ButtonWrapper>
  )
};
