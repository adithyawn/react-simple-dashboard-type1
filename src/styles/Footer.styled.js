import styled from 'styled-components';

export const FooterStyle = styled.div`
  background: ${({ theme }) => theme.colors.white};
  grid-area: footer;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 12px;
  }
`;
