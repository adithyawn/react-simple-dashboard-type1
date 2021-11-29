import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarStyle } from '../styles/Sidebar.styled';
import { FlexEnd } from '../styles/Flex.styled';
import ButtonSidebar from './ButtonSidebar';
import ButtonSidebarChild from './ButtonSidebarChild';
import {
  FaChartLine,
  FaChartPie,
  FaRobot,
  FaChevronRight,
  FaCogs,
  FaChevronLeft,
} from 'react-icons/fa';

import { useUtilitiesContext } from '../context/utilities_context';

function Sidebar() {
  const { collapseSidebar, is_sidebar_collapse, is_headerbar_collapse } =
    useUtilitiesContext();

  return (
    <>
      <SidebarStyle collapse={is_headerbar_collapse}>
        <FlexEnd>
          <a className='sidebar-collapse' onClick={collapseSidebar}>
            {is_sidebar_collapse ? <FaChevronRight /> : <FaChevronLeft />}
          </a>
        </FlexEnd>
        <div>
          <ul>
            <li>
              <Link to='/'>
                <ButtonSidebar icon={<FaChartLine />} text={'Analisa Akses'} />
              </Link>
            </li>
            <li>
              <Link to='/analisa-konten'>
                <ButtonSidebar icon={<FaChartPie />} text={'Analisa Konten'} />
              </Link>
            </li>
            <li>
              <Link to='/knomi'>
                <ButtonSidebar icon={<FaRobot />} text={'Knomi'} />
              </Link>
            </li>
            <li>
              <Link to='/knomi/inbox'>
                <ButtonSidebarChild icon={<FaChevronRight />} text={'Inbox'} />
              </Link>
            </li>
            <li>
              <Link to='/knomi/category'>
                <ButtonSidebarChild
                  icon={<FaChevronRight />}
                  text={'Ref Category'}
                />
              </Link>
            </li>
            <li>
              <Link to='/knomi/subcategory'>
                <ButtonSidebarChild
                  icon={<FaChevronRight />}
                  text={'Ref Sub Category'}
                />
              </Link>
            </li>
            <li>
              <Link to='/settings'>
                <ButtonSidebar
                  icon={<FaCogs />}
                  text={'Settings'}
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
