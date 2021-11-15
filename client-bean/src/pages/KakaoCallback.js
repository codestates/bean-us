/* eslint-disable react-hooks/exhaustive-deps*/

import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function KakaoCallback({ loginHandler, saveLoginId }) {
  const navigate = useNavigate();
  const getKakaoAccessToken = () => {
    const http = process.env.REACT_APP_HTTPURL;
    const code = new URL(window.location.href).searchParams.get('code');
    return axios.get(`${http}/auth/kakao-callback?code=${code}`);
  };

  useEffect(() => {
    getKakaoAccessToken().then((res) => {
      console.log(res.data);
      saveLoginId(res.data.userId);
      loginHandler(true);
      navigate('/', { replace: true });
    });
  }, []);

  return <div></div>;
}
