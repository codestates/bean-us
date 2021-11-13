const { isAuthorized } = require('./functions');

module.exports = {
  myInfo: (req, res) => {
    const userData = isAuthorized(req);

    if (!userData) {
      return res.json({ data: false, message: '올바르게 로그인되지 않았어요!' });
    }

    const { userId, email } = userData;

    res.json({ data: true, informations: { userId, email }, message: '요청하신 정보를 보냅니다' });
  },
};
