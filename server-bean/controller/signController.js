require('dotenv').config();

const { userInfo } = require('../models');
const { generateAccessToken, sendAccessToken } = require('./functions');

module.exports = {
  login: (req, res) => {
    const { userId, password } = req.body;
    console.log(req.body);
    if (!(userId && password)) return res.json({ data: false, message: '아이디와 비밀번호를 모두 입력해주세요' });

    userInfo.findOne({ where: { userId } }).then((data) => {
      if (!data) return res.json({ data: false, message: '해당 아이디가 없습니다' });
      if (data.dataValues.password !== password) return res.json({ data: false, message: '아이디와 비밀번호가 일치하지 않습니다' });

      delete data.dataValues.password;

      const accessToken = generateAccessToken(data.dataValues);
      sendAccessToken(res, accessToken);

      return res.status(201).json({ data: true, message: '로그인이 완료되었습니다' });
    });
  },

  signupCheck: (req, res) => {
    const { userId } = req.body;

    if (!userId) return res.send('아이디를 반드시 보내주세요');

    userInfo
      .findOne({ where: { userId } })
      .then((data) => {
        if (!data) return res.json({ data: true, message: '사용할 수 있는 아이디입니다' });
        else return res.json({ data: false, message: '이미 등록된 아이디입니다' });
      })
      .catch();
  },

  signup: (req, res) => {
    const { userId, password, email } = req.body;

    if (!(userId && password && email)) return res.json({ data: false, message: '아이디, 패스워드, 이메일을 모두 적어주세요' });

    userInfo
      .findOrCreate({
        where: { userId },
        defaults: { password, email },
      })
      .then(([data, created]) => {
        if (!created) {
          return res.json({ data: false, message: '이미 존재하는 아이디입니다.' });
        }

        delete data.dataValues.password;

        res.status(201).json({ data: true, message: '회원가입이 완료되었습니다' });
      });
  },

  logout: (req, res) => {
    res.clearCookie('accessToken').send('로그아웃 되었습니다');
  },

  oauth: (req, res) => {},
};
