import styled from 'styled-components';

export const OverviewCardStyle = styled.div`
  display: flex;
  background: #fff;
  margin: 10px 20px;
  flex-grow: 1;
  /* Flex Grow need min-width if wrapped */
  width: 200px;
  height: 100px;
  border-radius: 8px;
  justify-content: start;
  align-items: center;

  p:first-child {
    font-weight: 600;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    margin: 30px 20px;
  }
`;

export const CardIcon = styled.div`
  background: red;
  padding: 12px;
  font-size: 1.5rem;
  margin: 0 1rem;
  border-radius: 8px;
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};

  svg {
    font-size: 1.8rem;
  }
`;
