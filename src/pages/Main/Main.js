import { Link } from 'react-router-dom';
import React from 'react';
import './main.css';
import MainCardWrapper from '../../components/MainCardWrapper/MainCardWrapper';
import SmallCardWrapper from '../../components/SmallCardWrapper/SmallCardWrapper';
import LargeCard from '../../components/LargeCard/LargeCard.jsx';

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
          <SmallCardWrapper></SmallCardWrapper>
        </div>
        <MainCardWrapper></MainCardWrapper>
        <LargeCard
          title="게시물 제목"
          date="2024.03.10"
          adminName="김땡땡"
          category="⛪️ 공간"
          commentCount="3"
          desc="게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용"
          tag="태그1"
        ></LargeCard>
      </div>
    </div>
  );
};

export default Main;
