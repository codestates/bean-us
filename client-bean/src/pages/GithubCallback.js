/* eslint-disable react-hooks/exhaustive-deps*/

import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

  return <div></div>;
}
