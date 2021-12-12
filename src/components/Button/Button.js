import React from 'react';
import { ButtonStyle } from '../../styles/Button.styled';

function Button({ text, width, bg }) {
  return (
    <>
      <ButtonStyle width={width} bg={bg}>
        {text}
      </ButtonStyle>
    </>
  );
}

export default Button;
