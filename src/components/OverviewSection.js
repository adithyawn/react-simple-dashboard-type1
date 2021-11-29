import React from 'react';
import OverviewCard from './OverviewCard';
import { OverviewSectionStyle } from '../styles/OverviewSection.styled';
import { FaUserFriends, FaFile, FaHeart, FaEye } from 'react-icons/fa';

function OverviewSection() {
  return (
    <OverviewSectionStyle>
      <OverviewCard
        icon={<FaUserFriends />}
        text={'Viewers'}
        bg={'#e6f7f8'}
        color={'#00afb9'}
      />
      <OverviewCard
        icon={<FaFile />}
        text={'Post'}
        bg={'#fff3e6'}
        color={'#ff8100'}
      />
      <OverviewCard
        icon={<FaHeart />}
        text={'Download'}
        bg={'#ffedf0'}
        color={'#ff4d6d'}
      />
      <OverviewCard
        icon={<FaEye />}
        text={'Post'}
        bg={'#e7f2fd'}
        color={'#1081e8'}
      />
    </OverviewSectionStyle>
  );
}

export default OverviewSection;
