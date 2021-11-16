import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';

import { getMyInfos } from '../network/myPage/myPage';
import { theme } from '../styles/theme';

import MyInfo from '../components/myPage/MyInfo';
import MyBeans from '../components/myPage/MyBeans';
import MyPosts from '../components/myPage/MyPosts';

import LoginRequest from '../components/myPage/LoginRequest';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
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
    width: 150px;
    text-decoration: none;
  }
`;

const lightGreen = theme.color.darkGreen;

const LinkButton = styled.button`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  line-height: 1.7;
  font-weight: 600;
  font-size: 23px;
  transition: 0.1s;
  color: #000;
  box-shadow: ${({ clicked }) => (clicked ? `0 3px 8px 2px ${lightGreen}` : 'none')};
  &:hover {
    box-shadow: 0 3px 8px 2px #6d686f;
  }
  &:active {
    box-shadow: inset 0 0 8px 1px #6d686f;
  }
`;

export default function MyPage({ isLogin, loginHandler }) {
  const [isLoading, setIsLoding] = useState(true);

  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [social, setSocial] = useState('');

  const [clickedLink, setClickedLink] = useState({
    myInfo: true,
    myBeans: false,
    myPosts: false,
  });

  useEffect(() => {
    getMyInfos().then((res) => {
      if (res.data.informations) {
        setUserId(res.data.informations.userId);
        setEmail(res.data.informations.email);
        setSocial(res.data.informations.social);
        setIsLoding(false);
      }
    });
  }, [userId, email, social, isLogin]);

  const clieckedTitle = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    const name = e.target.name;
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

  console.log(clickedLink.myInfo);

  return (
    <>
      {isLogin ? (
        <MainContainer>
          <MyPageSideBars>
            <Link to=''>
              <LinkButton name='myInfo' clicked={clickedLink.myInfo} onClick={clieckedTitle}>
                나의 정보
              </LinkButton>
            </Link>
            <Link to='myBeans'>
              <LinkButton name='myBeans' clicked={clickedLink.myBeans} onClick={clieckedTitle}>
                나의 원두
              </LinkButton>
            </Link>
            <Link to='myPosts'>
              <LinkButton name='myPosts' clicked={clickedLink.myPosts} onClick={clieckedTitle}>
                나의 글
              </LinkButton>
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
                  isLoading={isLoading}
                  editEmailReq={editEmailReq}
                  loginHandler={loginHandler}
                />
              }
            ></Route>
            <Route path='myBeans' element={<MyBeans loginId={userId} />}></Route>
            <Route path='myPosts' element={<MyPosts loginId={userId} />}></Route>
          </Routes>
        </MainContainer>
      ) : (
        <LoginRequest></LoginRequest>
      )}
    </>
  );
}
