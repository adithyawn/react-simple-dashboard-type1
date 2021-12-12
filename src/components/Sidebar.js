import React from 'react';
import { SidebarStyle } from '../styles/Sidebar.styled';
import { FlexEnd } from '../styles/Flex.styled';
import ButtonSidebar from './Button/ButtonSidebar';
import ButtonSidebarTree from './Button/ButtonSidebarTree';

import {
  FaChartLine,
  FaChartPie,
  FaRobot,
  FaChevronRight,
  FaCogs,
  FaBars,
} from 'react-icons/fa';

import { useUtilitiesContext } from '../context/utilities_context';

function Sidebar() {
  const {
    collapseSidebar,
    is_sidebar_collapse,
    is_headerbar_collapse,
    selected_id_sidebar,
  } = useUtilitiesContext();

  const submenuKnomi = [
    { id: 31, child_url: 'knomi/inbox', text: 'Inbox' },
    { id: 32, child_url: 'knomi/category', text: 'Ref Category' },
    {
      id: 33,
      child_url: '/dashboard/knomi/subcategory',
      text: 'Ref Subcategory',
    },
  ];

  console.log(selected_id_sidebar);

  return (
    <>
      <SidebarStyle collapse={is_headerbar_collapse}>
        <div className='sidebar-stickycontainer'>
          <FlexEnd>
            <a className='sidebar-collapse' onClick={collapseSidebar}>
              {is_sidebar_collapse ? <FaChevronRight /> : <FaBars />}
            </a>
          </FlexEnd>
          <div>
            <ul>
              <li>
                <ButtonSidebar
                  icon={<FaChartLine />}
                  text={'Analisa Akses'}
                  parent_url={'/dashboard'}
                  value={1}
                />
              </li>
              <li>
                <ButtonSidebar
                  icon={<FaChartPie />}
                  text={'Analisa Konten'}
                  parent_url={'analisa-konten'}
                  value={2}
                />
              </li>
              <li>
                <ButtonSidebarTree
                  icon={<FaRobot />}
                  text={'Knomi'}
                  parent_url={'knomi'}
                  submenu={submenuKnomi}
                  value={3}
                />
              </li>
              <li>
                <ButtonSidebar
                  icon={<FaCogs />}
                  text={'Settings'}
                  parent_url={'settings'}
                  value={4}
                ></ButtonSidebar>
              </li>
            </ul>
          </div>
        </div>
      </SidebarStyle>
    </>
  );
}

export default Sidebar;
