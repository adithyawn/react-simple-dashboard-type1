import React from 'react';
import {
  HeaderStyle,
  Logo,
  Title,
  LogoTitleStyle,
} from '../styles/Header.styled';
import img from '../assets/logokm.png';
import { FaBars, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { useUtilitiesContext } from '../context/utilities_context';

function Header({ title }) {
  const { collapseHeaderbar } = useUtilitiesContext();

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <>
      <HeaderStyle>
        <FaBars size={20} color={'#ffff'} onClick={collapseHeaderbar} />
        <LogoTitleStyle>
          <Logo src={img} alt='' />
          <Title>{title}</Title>
        </LogoTitleStyle>
        <FaSignOutAlt
          className='logout-button'
          size={20}
          color={'#ffff'}
          onClick={handleLogout}
        />
      </HeaderStyle>
    </>
  );
}

export default Header;
