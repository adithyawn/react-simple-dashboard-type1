import React from 'react';
import {
  HeaderStyle,
  Logo,
  Title,
  LogoTitleStyle,
} from '../styles/Header.styled';
import { FlexCenter } from '../styles/Flex.styled';
import img from '../assets/logokm.png';
import { FaBars, FaSignOutAlt } from 'react-icons/fa';

import { useUtilitiesContext } from '../context/utilities_context';

function Header({ title }) {
  const { collapseHeaderbar, is_headerbar_collapse } = useUtilitiesContext();

  return (
    <>
      <HeaderStyle>
        <FaBars size={20} color={'#3d3d3d'} onClick={collapseHeaderbar} />
        <LogoTitleStyle>
          <Logo src={img} alt='' />
          <Title>{title}</Title>
        </LogoTitleStyle>
        <FaSignOutAlt size={20} color={'#3d3d3d'} />
      </HeaderStyle>
    </>
  );
}

export default Header;
