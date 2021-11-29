import React from 'react';
import { ButtonSidebarChildStyle } from '../styles/Button.styled';
import { useUtilitiesContext } from '../context/utilities_context';

function ButtonSidebarChild({ icon, text }) {
  const { is_sidebar_collapse } = useUtilitiesContext();

  return (
    <ButtonSidebarChildStyle collapse={is_sidebar_collapse}>
      {icon}
      <p>{text}</p>
    </ButtonSidebarChildStyle>
  );
}

export default ButtonSidebarChild;
