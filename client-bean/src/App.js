/* eslint-disable no-unused-vars*/

import React, { useState, useEffect } from 'react';
import './App.css';

import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Main from './pages/Main';
import Posts from './pages/Posts';
import Beans from './pages/Beans';
import MyPage from './pages/MyPage';
import PostsView from './pages/PostsView';
import PostsCreate from './pages/PostsCreate';
import PostEdit from './pages/PostEdit';
import KakaoCallback from './pages/KakaoCallback';
import GithubCallback from './pages/GithubCallback';
import SignModal from './components/signModal/SignModal';

import { checkToken } from './network/sign/checkToken';
import EmptyPage from './pages/EmptyPage';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [renderModal, setRenderModal] = useState(false);
  const [loginId, setLoginId] = useState(null);
  const loginHandler = (data) => {
    if (data === null) return setIsLogin(!isLogin);
    setIsLogin(data);
  };

  const modalHandler = () => {
    console.log('handle');
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
      {location.pathname === '/' || 
      location.pathname === '/posts/create' || 
      location.pathname.includes('/posts/edit') ? 
      null : (
        <NavBar
          isLogin={isLogin}
          modalHandler={modalHandler}
          loginHandler={loginHandler}
          loginId={loginId}
          saveLoginId={saveLoginId}
          renderModal={renderModal}
        />
      )}
      <Routes>
        <Route
          path='/'
          element={
            <Main
              isLogin={isLogin}
              loginHandler={loginHandler}
              loginId={loginId}
              saveLoginId={saveLoginId}
              modalHandler={modalHandler}
            />
          }
        />
        <Route path='/posts/view/:id' element={<PostsView loginId={loginId} />} />
        <Route path='/posts/edit/:id' element={<PostEdit />} />
        <Route path='/posts/create' element={<PostsCreate />} />
        <Route path='/posts' element={<Posts isLogin={isLogin} />} />
        <Route path='/beans' element={<Beans loginId={loginId} />} />
        <Route
          path='/myPage/*'
          element={<MyPage isLogin={isLogin} loginHandler={loginHandler} />}
        />
        <Route
          path='/auth/kakao-callback'
          element={<KakaoCallback loginHandler={loginHandler} saveLoginId={saveLoginId} />}
        />
        <Route
          path='/auth/github-callback'
          element={<GithubCallback loginHandler={loginHandler} saveLoginId={saveLoginId} />}
        />
        <Route path='*' element={<EmptyPage />} />
      </Routes>
      {renderModal ? (
        <SignModal
          isLogin={isLogin}
          modalHandler={modalHandler}
          saveLoginId={saveLoginId}
          loginHandler={loginHandler}
        />
      ) : null}
    </>
  );
}

export default App;
