import { Link } from 'react-router-dom';
import React from 'react';
import './main.css';
import MainCardWrapper from '../../components/MainCardWrapper/MainCardWrapper';
import SmallCard from '../../components/SmallCard/SmallCard';

const Main = () => {
  return (
    <div id="homeWrap">
      <header id="header">
        <div id="headerWrap">
          <p className="h1">예배의 감격이 있는 열린교회</p>
          <Link href="#">로그인</Link>
        </div>
      </header>
      <div id="main">
        <div className="mainWrap">
          <div className="m1">
            <div className="icon">
              <img src="../images/yullinwiki_logo.svg" alt="아이콘" />
            </div>
            <div className="text">
              <h1 className="title">열린 위키</h1>
              <p className="desc">열린교회에 대한 모든 것</p>
            </div>
            <div className="search">
              <input type="search" placeholder="열린교회의 크고 작은 이야기" />
            </div>
          </div>
          <div className="m2">
            <SmallCard></SmallCard>
          </div>
        </div>
        <MainCardWrapper></MainCardWrapper>
      </div>
      <footer>
        <div className="footer-wrap">
          <div className="footer-info"></div>
          <div className="footer-contents"></div>
        </div>
      </footer>
    </div>
  );
};

export default Main;
