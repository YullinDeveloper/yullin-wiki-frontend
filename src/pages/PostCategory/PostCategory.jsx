import React from 'react';
import styles from './PostCategory.module.css';
import Header from '../../components/Header/Header';

const PostCategory = () => {
  return (
    <div id={styles['postCategory']}>
      <Header />
      PostCategory <br />
      입니다.
    </div>
  );
};

export default PostCategory;
