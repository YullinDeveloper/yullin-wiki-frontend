import React from 'react';
import styles from './Login.module.css';
import Header from '../../components/Header/Header';
const Login = () => {
  return (
    <div id={styles['login']}>
      <Header />
      Login <br />
      입니다.
    </div>
  );
};

export default Login;
