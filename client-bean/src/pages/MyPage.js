import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';

import { getMyInfos } from '../network/myPage/myPage';

import MyInfo from '../components/myPage/MyInfo';
import MyBeans from '../components/myPage/MyBeans';
import MyPosts from '../components/myPage/MyPosts';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
  overflow-y: auto;
  overflow-x: hidden;
`;

const MyPageSideBars = styled.section`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 50px;
  width: 450px;
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  > a {
    display: flex;
    width: 150px;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    line-height: 1.7;
    font-weight: 600;
    font-size: 23px;
    color: #000;
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
    &:active {
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.6);
    }
  }
`;

export default function Main({ isLogin, loginHandler }) {
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [social, setSocial] = useState('');

  const [clickedLink, setClickedLink] = useState({
    myInfo: false,
    myBeans: false,
    myPosts: false,
  });

  useEffect(() => {
    getMyInfos().then((res) => {
      if (res.data.informations) {
        console.log(res.data.informations);
        setUserId(res.data.informations.userId);
        setEmail(res.data.informations.email);
        setSocial(res.data.informations.social);
      }
    });
  }, [userId, email, social, isLogin]);

  const clieckedTitle = (e) => {
    const { name } = e.target;

    setClickedLink({
      myInfo: false,
      myBeans: false,
      myPosts: false,
      [name]: true,
    });
  };

  const editEmailReq = (data) => {
    setEmail(data);
  };

  return (
    <>
      {isLogin ? (
        <MainContainer>
          <MyPageSideBars>
            <Link
              to=''
              name='myInfo'
              clicked={clickedLink.myInfo ? 'clicked' : null}
              onClick={clieckedTitle}
            >
              나의 정보
            </Link>
            <Link
              to='myBeans'
              name='myBeans'
              clicked={clickedLink.myBeans ? 'clicked' : null}
              onClick={clieckedTitle}
            >
              나의 원두
            </Link>
            <Link
              to='myPosts'
              name='myPosts'
              clicked={clickedLink.myPosts ? 'clicked' : null}
              onClick={clieckedTitle}
            >
              나의 글
            </Link>
          </MyPageSideBars>
          <Routes>
            <Route
              path=''
              element={
                <MyInfo
                  userId={userId}
                  email={email}
                  social={social}
                  editEmailReq={editEmailReq}
                  loginHandler={loginHandler}
                />
              }
            ></Route>
            <Route path='myBeans' element={<MyBeans loginId={userId} />}></Route>
            <Route path='myPosts' element={<MyPosts loginId={userId}/>}></Route>
          </Routes>
        </MainContainer>
      ) : (
        <div>로그인을 해주세요!</div>
      )}
    </>
  );
}
