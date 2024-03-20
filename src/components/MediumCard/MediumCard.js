import React from 'react';
import Tag from '../Tag/Tag';
import { TagWrapper, MCardHeader, MCardCont, MediumCardStyle } from './style';

// eslint-disable-next-line react/prop-types
const MediumCard = ({ header, desc }) => {
  return (
    <MediumCardStyle>
      <MCardHeader>{header}</MCardHeader>
      <TagWrapper>
        <Tag tag={'태그1'} />
      </TagWrapper>
      <MCardCont>{desc}</MCardCont>
    </MediumCardStyle>
  );
};

export default MediumCard;
