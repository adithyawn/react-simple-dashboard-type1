import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarStyle } from '../styles/Sidebar.styled';
import { FlexEnd } from '../styles/Flex.styled';
import ButtonSidebar from './ButtonSidebar';
import ButtonSidebarTree from './ButtonSidebarTree';
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
  const { collapseSidebar, is_sidebar_collapse, is_headerbar_collapse } =
    useUtilitiesContext();

  const submenuKnomi = [
    { id: 0, child_url: 'knomi/inbox', text: 'Inbox' },
    { id: 1, child_url: 'knomi/category', text: 'Ref Category' },
    {
      id: 2,
      child_url: '/dashboard/knomi/subcategory',
      text: 'Ref Subcategory',
    },
  ];

  return (
    <>
      <SidebarStyle collapse={is_headerbar_collapse}>
        <FlexEnd>
          <a className='sidebar-collapse' onClick={collapseSidebar}>
            {is_sidebar_collapse ? <FaChevronRight /> : <FaBars />}
          </a>
        </FlexEnd>
        <div>
          <ul>
            <li>
              <Link to='/' href=''>
                <ButtonSidebar
                  icon={<FaChartLine />}
                  text={'Analisa Akses'}
                  parent_url={'/dashboard'}
                />
              </Link>
            </li>
            <li>
              <ButtonSidebar
                icon={<FaChartPie />}
                text={'Analisa Konten'}
                parent_url={'analisa-konten'}
              />
            </li>
            <li>
              <ButtonSidebarTree
                icon={<FaRobot />}
                text={'Knomi'}
                parent_url={'knomi'}
                submenu={submenuKnomi}
              />
            </li>
            <li>
              <Link to='settings'>
                <ButtonSidebar
                  icon={<FaCogs />}
                  text={'Settings'}
                  parent_url={'settings'}
                ></ButtonSidebar>
              </Link>
            </li>
          </ul>
        </div>
      </SidebarStyle>
    </>
  );
}

export default Sidebar;
