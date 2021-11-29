import styled from 'styled-components';

export const ContentSectionStyle = styled.div`
  height: 300px;
  width: auto;
  margin: 20px 20px;
  background: ${({ theme }) => theme.colors.secondary};

  @media (min-width: ${({ theme }) => theme.mobile}) {
    margin: 0px 20px;
    margin-bottom: 20px;
  }
`;
