import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnalisaAkses from './pages/AnalisaAkses';
import AnalisaKonten from './pages/AnalisaKonten';
import Knomi from './pages/Knomi';
import Settings from './pages/Settings';
import NoMatch from './pages/NoMatch';
import KnomiCategory from './pages/KnomiCategory';
import KnomiSubcategory from './pages/KnomiSubCategory';
import KnomiInbox from './pages/KnomiInbox';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';

const theme = {
  colors: {
    primary: '#1081e8',
    secondary: '#6c757d',
    success: '#28a745',
    info: '#17a2b8',
    danger: '#dc3545',
    warning: '#ffc107',
    light: '#f8f8f8',
    white: '#fff',
    grey: '#3d3d3d',
  },
  font: {
    primary: `'Open Sans',sans-serif`,
  },
  mobile: '480px',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          {/* Layout as container for all children component below and will pop up in <Outlet/> Component (in Main component) */}
          <Route path='/dashboard' element={<Layout title={'KM Dashboard'} />}>
            {/* Child url doesnt need "/"" because parent already has "/" , so for child url will add path after /dashboard/ automaticaly */}
            <Route index element={<AnalisaAkses />} />
            <Route path='analisa-konten' element={<AnalisaKonten />} />
            <Route path='knomi'>
              {/* If not container just put it as child and set as index */}
              <Route index element={<Knomi />} />
              <Route path='inbox' element={<KnomiInbox />} />
              <Route path='category' element={<KnomiCategory />} />
              <Route path='subcategory' element={<KnomiSubcategory />} />
            </Route>
            <Route path='settings' element={<Settings />} />
          </Route>
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
