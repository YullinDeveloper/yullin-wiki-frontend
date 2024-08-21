import React from 'react';
import styles from './LargeCard.module.css';

const LargeCard = props => {
  console.log(props);
  return (
    <div className={styles['large-card-wrap']}>
      <div className={styles['box-style']}>
        <div className={styles['title-box-style']}>
          <h1 className={styles['heading1']}>{props.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default LargeCard;
