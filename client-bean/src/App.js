import React, { useState } from 'react';
import './App.css';

import { Routes, Route, useLocation } from 'react-router-dom';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Main from './pages/Main';
import Posts from './pages/Posts';
import Beans from './pages/Beans';
import MyPage from './pages/MyPage';

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
      {location.pathname === '/' ? null : <TopBar isLogin={isLogin} modalHandler={modalHandler} />}
      {location.pathname === '/' ? null : <NavBar />}
      <Routes>
        <Route
          exact
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
        <Route path='/posts' element={<Posts />} />
        <Route path='/beans' element={<Beans />} />
        <Route path='/myPage' element={<MyPage />} />
      </Routes>
    </>
  );
}

export default App;
