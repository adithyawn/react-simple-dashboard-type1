import React from 'react';
import { MainStyle } from '../styles/Main.styled';
import OverviewSection from './OverviewSection';
import ContentSection from './ContentSection';
function Main() {
  return (
    <MainStyle>
      <OverviewSection />
      <ContentSection />
      <ContentSection />
    </MainStyle>
  );
}

export default Main;
