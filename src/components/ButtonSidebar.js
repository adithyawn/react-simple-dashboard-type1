import React from 'react';
import { ButtonSidebarStyle } from '../styles/Button.styled';
import { useUtilitiesContext } from '../context/utilities_context';

function ButtonSidebar({ icon, text }) {
  const { is_sidebar_collapse } = useUtilitiesContext();

  return (
    // Passing props buat styling harus di komponen styling-nya bukan di html
    <ButtonSidebarStyle collapse={is_sidebar_collapse}>
      {icon}
      <p>{text}</p>
    </ButtonSidebarStyle>
  );
}

export default ButtonSidebar;
