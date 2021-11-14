const { isAuthorized } = require('./functions');
const { userInfo } = require('../models');

module.exports = {
  myInfo: (req, res) => {
    const userData = isAuthorized(req);
    if (!userData) {
      return res.json({ data: false, message: '올바르게 로그인되지 않았어요!' });
    }

    const { userId, email, social } = userData;
    res.json({ data: true, informations: { userId, email, social }, message: '요청하신 정보를 보냅니다' });
  },

  email: (req, res) => {
    const { userId, email } = req.body;
    console.log(userId, email);
    if (!(userId && email)) return res.send('아이디, 이메일을 제대로 보내주세요');
    userInfo
      .update({ email }, { where: { userId } })
      .then((data) => res.send('이메일 정보를 수정했습니다'))
      .catch((err) => res.status(500).send('이메일을 수정하지 못했습니다'));
  },
};
