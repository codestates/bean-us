/* eslint-disable react-hooks/exhaustive-deps*/

import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingPage from './LoadingPage';

export default function KakaoCallback({ loginHandler }) {
  const navigate = useNavigate();
  const getGithubAccessToken = () => {
    const http = process.env.REACT_APP_HTTPURL;
    const code = new URL(window.location.href).searchParams.get('code');
    return axios.get(`${http}/auth/github-callback?code=${code}`);
  };

  useEffect(() => {
    getGithubAccessToken().then((res) => {
      loginHandler();
      navigate(-1);
    });
  }, []);

  return <LoadingPage content='Github로 로그인 진행중입니다' width='1000px' spinner />;
}
