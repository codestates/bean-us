/* eslint-disable no-unused-vars*/
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SignModal from '../components/signModal/SignModal';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { getMyInfos } from '../network/myPage/myPage';

import MyInfo from '../components/myPage/MyInfo';
import MyBeans from '../components/myPage/MyBeans';
import MyPosts from '../components/myPage/MyPosts';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
  overflow: hidden;
`;

const MyPageSideBars = styled.section`
  display: flex;
  align-items: space-between;
  margin-top: 30px;
  width: 1100px;
  height: 60px;
  background-color: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const MyPageContents = styled.section`
  display: flex;
  margin-top: 30px;
  width: 1100px;
  height: 300px;
`;

const SideBar = styled.p`
  height: 40px;
  font-size: 25px;
  text-decoration: none;
  background-color: #fff;
  &:hover {
    cursor: pointer;
  }
`;

export default function Main({ isLogin, renderModal, modalHandler }) {
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    getMyInfos().then((res) => {
      if (res.data.informatiosn) {
        setUserId(res.data.informations.userId);
        setEmail(res.data.informations.email);
      }
      return () => {
        setUserId('');
        setEmail('');
      };
    });
  }, []);

  return (
    <>
      {isLogin ? (
        <MainContainer>
          <MyPageSideBars>
            <Link to='/my-page'>
              <SideBar>나의 정보</SideBar>
            </Link>
            <Link to='/my-page/my-beans'>
              <SideBar>나의 원두</SideBar>
            </Link>
            <Link to='/my-page/my-posts'>
              <SideBar>나의 글</SideBar>
            </Link>
          </MyPageSideBars>
          <MyPageContents>
            <Routes>
              <Route path='/my-page' elements={<MyInfo />}></Route>
              <Route path='/my-page/my-beans' elements={<MyBeans />}></Route>
              <Route path='/my-page/my-posts' elements={<MyPosts />}></Route>
            </Routes>
          </MyPageContents>
        </MainContainer>
      ) : (
        <div>로그인을 해주세요!</div>
      )}
      {renderModal ? <SignModal isLogin={isLogin} modalHandler={modalHandler} /> : null}
    </>
  );
}
