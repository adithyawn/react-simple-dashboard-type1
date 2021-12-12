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

function ButtonSidebarTree({ icon, text, parent_url, value, submenu, id }) {
  const { is_sidebar_collapse, selected_id_sidebar, selectedIdSidebar } =
    useUtilitiesContext();

  const [isCollapse, setIsCollapse] = useState(false);

  const navigate = useNavigate();

  const handleCollapse = (e) => {
    e.preventDefault();
    navigate(parent_url);
    setIsCollapse(!isCollapse);
    // console.log(e.currentTarget.getAttribute('value'));
    const id = e.currentTarget.getAttribute('value');
    selectedIdSidebar(id);
  };

  const handleClickChild = (child_url, id) => {
    console.log(id);
    navigate(child_url);
    selectedIdSidebar(id);
  };

  // console.log('cek', isCollapse);

  return (
    <>
      <ButtonSidebarTreeStyle
        collapse={is_sidebar_collapse}
        onClick={handleCollapse}
        value={value}
        active={selected_id_sidebar == value && 'true'}
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
            const child_url = item.child_url;
            const id = item.id;

            return (
              // <Link to={item.child_url} key={item.id}>
              <ButtonSidebarChildStyle
                key={item.id}
                onClick={() => handleClickChild(child_url, id)}
                collapse={is_sidebar_collapse}
                active={selected_id_sidebar == id && 'true'}
              >
                <FaArrowCircleRight />
                <p>{item.text}</p>
              </ButtonSidebarChildStyle>
              // </Link>
            );
          })}
        </>
      )}
    </>
  );
}

export default ButtonSidebarTree;
