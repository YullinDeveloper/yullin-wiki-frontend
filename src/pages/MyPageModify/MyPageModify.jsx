import React from 'react';
import styles from './MyPageModify.module.css';
import Header from '../../components/Header/Header';
const MyPageModify = () => {
  return (
    <div id={styles['modify']}>
      <Header />
      MyPageModify <br />
      입니다.
    </div>
  );
};

export default MyPageModify;
