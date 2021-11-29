import styled from 'styled-components';

export const HeaderStyle = styled.div`
  background: ${({ theme }) => theme.colors.white};
  grid-area: header;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    justify-content: flex-end;

    svg:first-child {
      display: none;
    }
  }
`;

export const LogoTitleStyle = styled.div`
  display: flex;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    position: absolute;
    right: 42%;
  }
`;

export const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 10px;
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};

  @media (min-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.5rem;
  }
`;
