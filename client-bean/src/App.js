import React from 'react';
import './App.css';

import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Main from './pages/Main';
import Posts from './pages/Posts';
import Beans from './pages/Beans';
import MyPage from './pages/MyPage';

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/' ? null : <NavBar />}
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/beans" element={<Beans />} />
        <Route path="/myPage" element={<MyPage />} />
      </Routes>
    </>
  );
}

export default App;
