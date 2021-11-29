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
          <Route path='/' element={<AnalisaAkses />} />
          <Route path='/analisa-konten' element={<AnalisaKonten />} />
          <Route path='/knomi' element={<Knomi />} />
          <Route path='/knomi/inbox' element={<KnomiInbox />} />
          <Route path='/knomi/category' element={<KnomiCategory />} />
          <Route path='/knomi/subcategory' element={<KnomiSubcategory />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
