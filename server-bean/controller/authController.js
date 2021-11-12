require('dotenv').config();
const axios = require('axios');

const { userInfo } = require('../models');
const { generateAccessToken, sendAccessToken } = require('./functions');

module.exports = {
  kakao: (req, res) => {
    return res.redirect(`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_OAUTH_RESTAPI_KEY}&redirect_uri=${process.env.KAKAO_OAUTH_REDIRECT_URL}&&response_type=code`);
  },

  kakaoCallback: async (req, res) => {
    const accessCode = req.query.code;
    const kakaoAccessToken = await axios.post(
      `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.KAKAO_OAUTH_RESTAPI_KEY}&redirect_uri=${process.env.KAKAO_OAUTH_REDIRECT_URL}&code=${accessCode}`,
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      }
    );

    // console.log(kakaoAccessToken);
    // data: {
    //   access_token: 'ohyzrHQw2Nx15tHQk8H9ZF7afpwzwnEpXVSE-wo9dVoAAAF9FY7PIA',
    //   token_type: 'bearer',
    //   refresh_token: 'lmd-Rqj63pxwLNO11o4dugzhFIzub2JqP-YRLAo9dVoAAAF9FY7PHw',
    //   expires_in: 21599,
    //   scope: 'account_email profile_image profile_nickname',
    //   refresh_token_expires_in: 5183999
    // }

    const userData = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: { Authorization: `Bearer ${kakaoAccessToken.data.access_token}`, 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8;' },
    });

    // console.log(userData);

    // id: 1989378087,
    // connected_at: '2021-11-12T19:10:20Z',
    // properties: {
    //   nickname: '박예찬',
    //   profile_image: 'http://k.kakaocdn.net/dn/KVu6l/btrhTb53p8j/mJ7DxDqgUfXWbWWTIG3qmK/img_640x640.jpg',
    //   thumbnail_image: 'http://k.kakaocdn.net/dn/KVu6l/btrhTb53p8j/mJ7DxDqgUfXWbWWTIG3qmK/img_110x110.jpg'
    // },
    // kakao_account: {
    //   profile_nickname_needs_agreement: false,
    //   profile_image_needs_agreement: false,
    //   profile: [Object],
    //   has_email: true,
    //   email_needs_agreement: false,
    //   is_email_valid: true,
    //   is_email_verified: true,
    //   email: 'jkyyc3@daum.net'

    const realData = userData.data;

    const instance = await userInfo.findOrCreate({
      where: { id: realData.id, social: 'kakao' },
      defaults: {
        userId: realData.properties.nickname,
        password: '',
        email: realData.kakao_account.email,
      },
    });

    delete instance[0].dataValues.password;

    const beanusAccessToken = generateAccessToken(instance[0].dataValues);

    sendAccessToken(res, beanusAccessToken);

    res.json({ data: true, message: '카카오 아이디로 로그인에 성공하셨습니다' });
  },
};
