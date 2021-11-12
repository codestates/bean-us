import React, { useState } from 'react';
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

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [renderModal, setRenderModal] = useState(false);

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  const modalHandler = () => {
    setRenderModal(!renderModal);
  };

  const location = useLocation();
  return (
    <>
      {location.pathname === '/' || location.pathname === '/posts/create' ? null : (
        <TopBar isLogin={isLogin} modalHandler={modalHandler} />
      )}
      {location.pathname === '/' || location.pathname === '/posts/create' ? null : <NavBar />}
      <Routes>
        <Route
          path='/'
          element={
            <Main
              isLogin={isLogin}
              loginHandler={loginHandler}
              renderModal={renderModal}
              modalHandler={modalHandler}
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
            />
          }
        />
        <Route
          path='/beans'
          element={
            <Beans
              isLogin={isLogin}
              loginHandler={loginHandler}
              renderModal={renderModal}
              modalHandler={modalHandler}
            />
          }
        />
        <Route
          path='/myPage'
          element={
            <MyPage
              isLogin={isLogin}
              loginHandler={loginHandler}
              renderModal={renderModal}
              modalHandler={modalHandler}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
