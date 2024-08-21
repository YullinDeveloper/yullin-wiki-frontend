import React from 'react';
import styles from './Post.module.css';
import Header from '../../components/Header/Header';

const Post = () => {
  return (
    <div id={styles['post']}>
      <Header />
      Post <br /> 입니다.
    </div>
  );
};

export default Post;
