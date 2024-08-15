import React from 'react';
import {
  SmallCards,
  SmallCardWrap,
  SmallCardText,
  SmallCardTextDiv,
} from './style';
import SmallCard from '../SmallCard/SmallCard';

const SmallCardWrapper = () => {
  return (
    <SmallCardWrap>
      <SmallCardTextDiv>
        <SmallCardText>열린교회에 대해 더 알고 싶다면?</SmallCardText>
      </SmallCardTextDiv>
      <SmallCards>
        <SmallCard
          span={'열린교회'}
          spanHeader={'공식페이지'}
          imageUrl={'../images/official_website_icon.svg'}
        ></SmallCard>
        <SmallCard
          span={'열린교회'}
          spanHeader={'인스타'}
          imageUrl={'../images/official_website_icon.svg'}
        ></SmallCard>
        <SmallCard
          span={'열린교회'}
          spanHeader={'문화팀'}
          imageUrl={'../images/official_website_icon.svg'}
        ></SmallCard>
      </SmallCards>
    </SmallCardWrap>
  );
};

export default SmallCardWrapper;
