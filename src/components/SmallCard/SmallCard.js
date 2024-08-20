import React from 'react';
import { SmallCardStyle, SCardSpan, SCardSpanHeader, SCardIcon } from './style';

// eslint-disable-next-line react/prop-types
const SmallCard = ({ span, spanHeader, imageUrl }) => {
  return (
    <SmallCardStyle href="#">
      <SCardSpan>{span}</SCardSpan>
      <SCardSpanHeader>{spanHeader}</SCardSpanHeader>
      <SCardIcon src={imageUrl}></SCardIcon>
    </SmallCardStyle>
  );
};

export default SmallCard;
