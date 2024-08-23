import React from 'react';
import styles from './CommentCount.module.css';

const CommentCount = ({ commentCount }) => {
  return <div className={styles['commentcount-style']}>{commentCount}</div>;
};

export default CommentCount;
