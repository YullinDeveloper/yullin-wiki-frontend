import React from 'react';
import styles from './Header.module.css';

let loginYN = 'N';

const Header = () => {
  return (
    <div id={styles['header']}>
      <div id={styles['headerWrap']}>
        <div id={styles['searchWrap']}>
          <div className={styles['logo']}>
            <img src="../images/yullinwiki_logo_red.svg" alt="로고" />
            <p>열린위키</p>
          </div>
          <div className={styles['search']}>
            <input type="search" placeholder="전체 검색" />
          </div>
        </div>
        <div id={styles['loginWrap']}>
          {loginYN === 'N' ? (
            <>
              <div className={styles['join']}>
                <a href="/join">회원가입</a>
              </div>
              <div className={styles['login']}>
                <a href="/login">로그인</a>
              </div>
            </>
          ) : loginYN === 'Y' ? (
            <>
              <div className={styles['mypage']}></div>
              <div className={styles['logout']}>
                <button>로그아웃</button>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
