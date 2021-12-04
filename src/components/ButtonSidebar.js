import React from 'react';
import { ButtonSidebarStyle } from '../styles/Button.styled';
import { useUtilitiesContext } from '../context/utilities_context';
import { useNavigate } from 'react-router-dom';

function ButtonSidebar({ icon, text, parent_url }) {
  const { is_sidebar_collapse } = useUtilitiesContext();

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(parent_url);
  };

  return (
    // Passing props buat styling harus di komponen styling-nya bukan di html
    <ButtonSidebarStyle collapse={is_sidebar_collapse} onClick={handleClick}>
      {icon}
      <p>{text}</p>
    </ButtonSidebarStyle>
  );
}

export default ButtonSidebar;
