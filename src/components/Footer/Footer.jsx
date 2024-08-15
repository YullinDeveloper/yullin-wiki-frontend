import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer id={styles['footer']}>
      <div id={styles['footerWrap']}>
        <div className={styles['footer-info']}>
          <div className={styles['icon']}>
            <img src="../images/yullinwiki_logo.svg" alt="아이콘" />
            <p>
              열린 위키 <span>열린교회에 대한 모든 것</span>
            </p>
          </div>
          <div className={styles['copyright']}>
            <span>©2024 000. All right reserved.</span>
          </div>
        </div>
        <div className={styles['footer-contents']}>
          <div className={styles['contact-info']}>
            <div className={styles['category']}>
              <p className={styles['footer-title']}>카테고리</p>
              <p>열린교회 속 공간</p>
              <p>열린교회 내 섬김</p>
              <p>열린교회 청년부</p>
            </div>
            <div className={styles['contact-us']}>
              <p className={styles['footer-title']}>문의</p>
              <p>문화팀 | ycteam001@gmail.com</p>
              <p>개발자팀 | yullindevteam001@gmail.com</p>
            </div>
            <div className={styles['SNS']}>
              <p className={styles['footer-title']}>열린교회 SNS</p>
              <div>
                <a
                  href="https://www.instagram.com/yullinyouth/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="../images/instagram_icon_pink.svg"
                    alt="문화팀 인스타그램"
                  />
                </a>
                <a
                  href="https://www.yullin.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="../images/official_website_icon_pink.svg"
                    alt="열린교회 홈페이지"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@yullinyouth426"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className={styles['youtube_icon']}
                    src="../images/official_youtube_icon_pink.svg"
                    alt="열린교회 청년부 유튜브"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={styles['address-info']}>
            <p>
              열린교회 주소 <span>경기 안양시 동안구 흥안대로439번길 31</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
