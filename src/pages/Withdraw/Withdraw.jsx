import React from 'react';
import styles from './Withdraw.module.css';
import Header from '../../components/Header/Header';

const Withdraw = () => {
  return (
    <div id={styles['withdraw']}>
      <Header />
      Withdraw <br /> 입니다.
    </div>
  );
};

export default Withdraw;
