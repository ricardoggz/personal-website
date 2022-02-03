import React from 'react';
import { ButtonWrapper } from './button.elements';

export const Button = ({title, url}) => {
  return (
      <ButtonWrapper href={url} target="_blank">
          {title}
      </ButtonWrapper>
  )
};
