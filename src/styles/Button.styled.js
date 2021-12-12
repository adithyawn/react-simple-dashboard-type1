import styled from 'styled-components';

export const ButtonStyle = styled.a`
  background: ${(props) => props.theme.colors[props.bg]};
  padding: 5px 30px;
  color: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary_darker};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ButtonSidebarStyle = styled.div`
  display: flex;
  width: auto;
  padding: 10px;
  margin: 10px 0;
  border-radius: 8px;
  color: ${(props) =>
    props.active ? props.theme.colors.white : props.theme.colors.grey};
  align-items: center;
  background: ${(props) =>
    props.active ? props.theme.colors.primary : props.theme.colors.white};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  /* Keep Text Show When Mobile View */

  p {
    display: block;
  }

  svg {
    margin: 0 10px;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    /* Hide Text When Collapse Sidebar Active */
    p {
      display: ${(props) => (props.collapse ? 'none' : 'block')};
    }
  }
`;

export const ButtonSidebarTreeStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  padding: 10px;
  margin: 10px 0;
  border-radius: 8px;
  color: ${(props) =>
    props.active ? props.theme.colors.white : props.theme.colors.grey};
  align-items: center;
  background: ${(props) =>
    props.active ? props.theme.colors.primary : props.theme.colors.white};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  /* Keep Text Show When Mobile View */

  p {
    display: block;
  }

  svg {
    margin: 0 10px;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    /* Hide Text When Collapse Sidebar Active */
    p {
      display: ${(props) => (props.collapse ? 'none' : 'block')};
    }
    .collapse-icon {
      display: ${(props) => (props.collapse ? 'none' : 'block')};
    }
  }
`;

export const ButtonSidebarChildStyle = styled(ButtonSidebarStyle)`
  margin-left: 10px;

  p {
    display: block;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    /* Hide Text When Collapse Sidebar Active */
    p {
      display: ${(props) => (props.collapse ? 'none' : 'block')};
    }
  }
`;
