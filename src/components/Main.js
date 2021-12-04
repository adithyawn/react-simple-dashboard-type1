import React from 'react';
import { MainStyle } from '../styles/Main.styled';
import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <MainStyle>
      <Outlet />
    </MainStyle>
  );
}

export default Main;
