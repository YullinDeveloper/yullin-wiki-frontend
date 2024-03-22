import React from 'react';
import MediumCard from '../MediumCard/MediumCard';

import { MainCardWrapperStyle, MainCardWrapperDesc } from './style';

const MainCardWrapper = () => {
  return (
    <MainCardWrapperStyle>
      <MainCardWrapperDesc>열린교회에 대해 더 알고 싶다면?</MainCardWrapperDesc>
      <MediumCard
        header={'제목입니다.'}
        desc={
          '내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다'
        }
      ></MediumCard>
    </MainCardWrapperStyle>
  );
};

export default MainCardWrapper;
