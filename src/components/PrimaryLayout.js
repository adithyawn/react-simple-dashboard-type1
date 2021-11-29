import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import Footer from './Footer';
import { GridLayout } from '../styles/GridLayout.styled';
import { useUtilitiesContext } from '../context/utilities_context';

function PrimaryLayout() {
  const { is_sidebar_collapse } = useUtilitiesContext();

  return (
    <>
      <GridLayout collapse={is_sidebar_collapse}>
        <Header />
        <Sidebar />
        <Main />
        <Footer />
      </GridLayout>
    </>
  );
}

export default PrimaryLayout;
