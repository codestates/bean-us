import React from 'react';
import './App.css';

import { Routes, Route, useLocation } from 'react-router-dom';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Main from './pages/Main';
import Posts from './pages/Posts';
import Beans from './pages/Beans';
import MyPage from './pages/MyPage';

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/' ? null : <TopBar />}
      {location.pathname === '/' ? null : <NavBar />}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/posts/:role/:id' element={<Posts />} />
        <Route path='/beans' element={<Beans />} />
        <Route path='/myPage' element={<MyPage />} />
      </Routes>
    </>
  );
}

export default App;
