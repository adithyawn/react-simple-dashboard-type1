import styled from 'styled-components';

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px auto auto 50px;
  grid-template-areas:
    'header'
    'sidebar'
    'main'
    'footer';
  height: 100vh;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: grid;
    grid-template-columns: ${(props) =>
      props.collapse ? '100px 1fr' : '250px 1fr'};
    grid-template-rows: 50px auto 50px;
    grid-template-areas:
      'header header'
      'sidebar main'
      'footer footer';
  }
`;
