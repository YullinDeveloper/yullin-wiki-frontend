import React from 'react';
import styles from './SmallCardWrapper.module.css';
import SmallCard from '../SmallCard/SmallCard.jsx';

const SmallCardWrapper = () => {
  return (
    <div className={styles['smallcardwrap-style']}>
      <div>
        <div className={styles['smallcard-text']}>
          열린교회에 대해 더 알고 싶다면?
        </div>
      </div>
      <div className={styles['smallcards']}>
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
      </div>
    </div>
  );
};

export default SmallCardWrapper;
