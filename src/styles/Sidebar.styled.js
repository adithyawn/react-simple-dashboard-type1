import styled from 'styled-components';

export const SidebarStyle = styled.div`
  background: ${({ theme }) => theme.colors.light_darker};
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

  /* Sticky is used because it's not fit content and Its offset (top : 80px) depend to Parent. In this case depend on sidebar height as parent */
  .sidebar-stickycontainer {
    position: sticky;
    top: 80px;
    z-index: 1;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: block;

    .sidebar-collapse {
      display: block;
    }
  }
`;
