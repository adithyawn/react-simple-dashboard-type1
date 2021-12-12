import React, { useState } from 'react';
import {
  ButtonSidebarTreeStyle,
  ButtonSidebarChildStyle,
} from '../../styles/Button.styled';
import { useUtilitiesContext } from '../../context/utilities_context';
import { Flex } from '../../styles/Flex.styled';
import {
  FaChevronDown,
  FaChevronRight,
  FaArrowCircleRight,
} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function ButtonSidebarTree({ icon, text, parent_url, submenu }) {
  const { is_sidebar_collapse } = useUtilitiesContext();

  const [isCollapse, setIsCollapse] = useState(false);

  const navigate = useNavigate();

  const handleCollapse = (e) => {
    e.preventDefault();
    navigate(parent_url);
    setIsCollapse(!isCollapse);
  };

  // console.log('cek', isCollapse);

  return (
    <>
      <ButtonSidebarTreeStyle
        collapse={is_sidebar_collapse}
        onClick={handleCollapse}
      >
        <Flex>
          {icon}
          <p>{text}</p>
        </Flex>
        {isCollapse ? (
          <FaChevronDown className='collapse-icon' />
        ) : (
          <FaChevronRight className='collapse-icon' />
        )}
      </ButtonSidebarTreeStyle>

      {isCollapse && (
        <>
          {submenu.map((item) => {
            return (
              <Link to={item.child_url} key={item.id}>
                <ButtonSidebarChildStyle collapse={is_sidebar_collapse}>
                  <FaArrowCircleRight />
                  <p>{item.text}</p>
                </ButtonSidebarChildStyle>
              </Link>
            );
          })}
        </>
      )}
    </>
  );
}

export default ButtonSidebarTree;
