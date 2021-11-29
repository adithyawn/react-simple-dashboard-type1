import styled from 'styled-components';

export const SidebarStyle = styled.div`
  background: ${({ theme }) => theme.colors.light};
  grid-area: sidebar;
  padding: 30px 20px;
  list-style: none;
  display: ${(props) => (props.collapse ? 'none' : 'block')};

  li {
    list-style: none;
  }

  .sidebar-collapse {
    cursor: pointer;
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: block;

    .sidebar-collapse {
      display: block;
    }
  }
`;
