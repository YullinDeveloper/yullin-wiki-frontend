import React from 'react';
import styles from './Search.module.css';
import Header from '../../components/Header/Header';

const Search = () => {
  return (
    <div id={styles['search']}>
      <Header />
      검색결과 <br />
      입니다.
    </div>
  );
};

export default Search;
