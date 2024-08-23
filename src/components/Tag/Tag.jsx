import React from 'react';
import styles from './Tag.module.css';

const Tag = ({ tag }) => {
  return <div className={styles['tag-wrapper']}>{tag}</div>;
};

export default Tag;
