import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

body {
  font-family: ${({ theme }) => theme.font.primary};
  color: ${({ theme }) => theme.colors.grey};
  background: ${({ theme }) => theme.colors.white};
}

`;

export default GlobalStyles;
