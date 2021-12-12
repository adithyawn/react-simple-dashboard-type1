import React, { useState } from 'react';
import { ButtonSidebarStyle } from '../../styles/Button.styled';
import { useUtilitiesContext } from '../../context/utilities_context';
import { useNavigate } from 'react-router-dom';

function ButtonSidebar({ icon, text, parent_url, value }) {
  const { is_sidebar_collapse, selected_id_sidebar, selectedIdSidebar } =
    useUtilitiesContext();

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(parent_url);
    const id = e.currentTarget.getAttribute('value');
    // console.log(e.currentTarget.getAttribute('value'));
    selectedIdSidebar(id);
  };

  return (
    // Passing props buat styling harus di komponen styling-nya bukan di html
    <ButtonSidebarStyle
      collapse={is_sidebar_collapse}
      value={value}
      parent_url={parent_url}
      onClick={handleClick}
      active={selected_id_sidebar == value && 'true'}
    >
      {icon}
      <p>{text}</p>
    </ButtonSidebarStyle>
  );
}

export default ButtonSidebar;
