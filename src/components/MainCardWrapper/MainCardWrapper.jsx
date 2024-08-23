import React from 'react';
import MediumCard from '../MediumCard/MediumCard.jsx';

const MainCardWrapper = () => {
  return (
    <div>
      <p></p>
      <MediumCard
        header={'제목입니다.'}
        desc={
          '내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다'
        }
      ></MediumCard>
    </div>
  );
};

export default MainCardWrapper;
