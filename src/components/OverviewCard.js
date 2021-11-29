import React, { Children } from 'react';
import { CardIcon, OverviewCardStyle } from '../styles/Card.styled';
import { Flex } from '../styles/Flex.styled';

function OverviewCard({ icon, text, bg, color }) {
  return (
    <>
      <OverviewCardStyle>
        <CardIcon bg={bg} color={color}>
          {icon}
        </CardIcon>
        <div>
          <p>14.200</p>
          <p>{text}</p>
        </div>
      </OverviewCardStyle>
    </>
  );
}

export default OverviewCard;
