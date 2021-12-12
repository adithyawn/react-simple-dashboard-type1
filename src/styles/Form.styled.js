import styled from 'styled-components';

export const FormField = styled.div`
  height: 400px;
  width: 100%;
  padding: 0px 50px;
  background: ${({ theme }) => theme.colors.light};

  @media (min-width: ${({ theme }) => theme.mobile}) {
    margin: auto;
  }
`;

export const DropdownFieldStyle = styled.select`
  height: 30px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  margin: 10px 0;

  @media (min-width: ${({ theme }) => theme.mobile}) {
  }
`;
