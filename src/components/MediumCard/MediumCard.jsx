import React from 'react';
import styles from './MediumCard.module.css';
import Tag from '../Tag/Tag.jsx';

const MediumCard = ({ header, desc }) => {
  return (
    <div className={styles['mediumcard-style']}>
      <h1 className={styles['mediumcard-header']}>{header}</h1>
      <div className={styles['mediumcard-tag-wrapper']}>
        <Tag tag={'태그1'} />
      </div>
      <p className={styles['mediumcard-cont']}>{desc}</p>
    </div>
  );
};

export default MediumCard;
