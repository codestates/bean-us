/* eslint-disable react-hooks/exhaustive-deps*/

import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function KakaoCallback({ loginHandler }) {
  const navigate = useNavigate();
  const getKakaoAccessToken = () => {
    const http = process.env.REACT_APP_HTTPURL;
    const code = new URL(window.location.href).searchParams.get('code');
    return axios.get(`${http}/auth/kakao-callback?code=${code}`);
  };

  useEffect(() => {
    getKakaoAccessToken().then((res) => {
      loginHandler();
      navigate(-1);
    });
  }, []);

  return <div></div>;
}
