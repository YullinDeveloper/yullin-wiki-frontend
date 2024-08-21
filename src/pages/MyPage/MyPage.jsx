import React from 'react';
import styles from './MyPage.module.css';
import Header from '../../components/Header/Header';
const MyPage = () => {
  return (
    <div id={styles['mypage']}>
      <Header />
      MyPage <br />
      입니다.
    </div>
  );
};

export default MyPage;
