/* eslint-disable no-unused-vars*/

import React, { useState, useEffect } from 'react';
import './App.css';

import { Routes, Route, useLocation } from 'react-router-dom';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Main from './pages/Main';
import Posts from './pages/Posts';
import Beans from './pages/Beans';
import MyPage from './pages/MyPage';
import PostsView from './pages/PostsView';
import PostsCreate from './pages/PostsCreate';
import KakaoCallback from './pages/KakaoCallback';
import GithubCallback from './pages/GithubCallback';

import { checkToken } from './network/sign/checkToken';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [renderModal, setRenderModal] = useState(false);
  const [loginId, setLoginId] = useState(null);

  const loginHandler = (data) => {
    if (data === null) return setIsLogin(!isLogin);
    setIsLogin(data);
  };

  const modalHandler = () => {
    setRenderModal(!renderModal);
  };

  const saveLoginId = (data) => {
    setLoginId(data);
  };

  useEffect(() => {
    checkToken().then((res) => {
      if (res.data.data) {
        setIsLogin(true);
        setLoginId(res.data.loginId);
      } else {
        setIsLogin(false);
        setLoginId(null);
      }
    });
  }, [isLogin, loginId]);

  const location = useLocation();
  return (
    <>
      {location.pathname === '/' 
      || location.pathname === '/posts/create' ? null : (
        <TopBar
          isLogin={isLogin}
          modalHandler={modalHandler}
          loginHandler={loginHandler}
          loginId={loginId}
          saveLoginId={saveLoginId}
        />
      )}
      {location.pathname === '/' 
      || location.pathname === '/posts/create' ? null : <NavBar />}
      <Routes>
        <Route
          path='/'
          element={
            <Main
              isLogin={isLogin}
              loginHandler={loginHandler}
              renderModal={renderModal}
              modalHandler={modalHandler}
              loginId={loginId}
              saveLoginId={saveLoginId}
            />
          }
        />
        <Route path='/posts/view/:id' element={<PostsView />} />
        <Route path='/posts/create' element={<PostsCreate />} />
        <Route path='/posts/edit/:id' element={<PostsCreate />} />
        <Route
          path='/posts'
          element={
            <Posts
              isLogin={isLogin}
              loginHandler={loginHandler}
              renderModal={renderModal}
              modalHandler={modalHandler}
              loginId={loginId}
              saveLoginId={saveLoginId}
            />
          }
        />
        <Route
          path='/beans'
          element={
            <Beans
              isLogin={isLogin}
              loginId={loginId}
              loginHandler={loginHandler}
              renderModal={renderModal}
              modalHandler={modalHandler}
              saveLoginId={saveLoginId}
            />
          }
        />
        <Route
          path='/myPage/*'
          element={
            <MyPage
              isLogin={isLogin}
              renderModal={renderModal}
              modalHandler={modalHandler}
              loginHandler={loginHandler}
              saveLoginId={saveLoginId}
            />
          }
        />
        <Route
          path='/auth/kakao-callback'
          element={
            <KakaoCallback
              isLogin={isLogin}
              loginHandler={loginHandler}
              saveLoginId={saveLoginId}
            />
          }
        />
        <Route
          path='/auth/github-callback'
          element={
            <GithubCallback
              isLogin={isLogin}
              loginHandler={loginHandler}
              saveLoginId={saveLoginId}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
