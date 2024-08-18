import React from 'react';
import styles from './Join.module.css';
import Header from '../../components/Header/Header';

const Join = () => {
  return (
    <div id={styles['join']}>
      <Header />
      회원가입
      <br /> 입니다.
    </div>
  );
};

export default Join;
