import React from 'react';
import { SmallCardStyle, SCardSpan, SCardSpanHeader } from './style';

const SmallCard = () => {
  return (
    <SmallCardStyle href="#">
      <SCardSpan>열린교회</SCardSpan>
      <SCardSpanHeader>공식페이지</SCardSpanHeader>
    </SmallCardStyle>
  );
};

export default SmallCard;
