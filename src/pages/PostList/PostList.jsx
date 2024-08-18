import React from 'react';
import styles from './PostList.module.css';
import Header from '../../components/Header/Header';

const PostList = () => {
  return (
    <div id={styles['newPost']}>
      <Header />
      PostList <br />
      입니다.
    </div>
  );
};

export default PostList;
