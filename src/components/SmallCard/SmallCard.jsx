import React from 'react';
import styles from './SmallCard.module.css';
import { Link } from 'react-router-dom';

const SmallCard = ({ span, spanHeader, imageUrl }) => {
  return (
    <Link className={styles['smallcard-style']} href="#">
      <span className={styles['smallcard-span']}>{span}</span>
      <p className={styles['smallcard-header']}>{spanHeader}</p>
      <img className={styles['smallcard-icon']} src={imageUrl}></img>
    </Link>
  );
};

export default SmallCard;
