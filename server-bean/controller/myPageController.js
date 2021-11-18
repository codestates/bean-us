const { isAuthorized } = require('./functions/index.js');
const { userInfo, userBean, beanInfo, post } = require('./../models');

module.exports = {
  myInfo: (req, res) => {
    const userData = isAuthorized(req);
    if (!userData) {
      return res.json({ data: false, message: '올바르게 로그인되지 않았어요!' });
    }

    const { userId, social } = userData;

    userInfo.findOne({ where: { userId, social } }).then((data) => {
      if (!data) return res.json({ data: false, message: '다시 한 번 시도해주세요!' });

      const { userId, email, social } = data.dataValues;

      return res.json({ data: true, informations: { userId, email, social }, message: '요청하신 정보를 보냅니다' });
    });
  },

  myBeans: (req, res) => {
    // const accessTokenInfo = isAuthorized(req);

    // if(!accessTokenInfo){
    //   res.status(400).json({
    //     message: '로그인하여 주십시오.'
    //   });
    // }

    userBean
      .findAll({
        attributes: [],
        include: [
          {
            model: beanInfo,
            attributes: ['beanId', 'beanName'],
          },
        ],
        where: { userId: req.query.userId },
      })
      .then((result) => {
        res.status(200).json({
          beans: result,
        });
      });
  },

  myPosts: (req, res) => {
    post
      .findAll({
        where: { userId: req.query.userId },
      })
      .then((result) => {
        res.status(200).json({
          posts: result,
        });
      });
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

  passwordChange: async (req, res) => {
    const { userId, curPwd, newPwd } = req.body;

    const isMatched = await userInfo.findOne({
      where: { userId, password: curPwd },
    });

    if (!isMatched) return res.json({ data: false, message: '현재 비밀번호와 일치하지 않습니다' });

    const data = await userInfo.update({ userId, password: newPwd }, { where: { password: curPwd } });

    if (data) {
      return res.json({ data: true, message: '비밀번호가 정상적으로 바뀌었습니다' });
    } else {
      res.stats(500).send('올바른 입력을 받았으나 실패했습니다');
    }
  },

  withdrawal: async (req, res) => {
    const { userId, password } = req.body;

    const isMatched = await userInfo.findOne({
      where: { userId, password },
    });

    if (!isMatched) return res.json({ data: false, message: '현재 비밀번호와 다릅니다' });

    const data = await userInfo.destroy({ where: { userId, password } });

    if (data) {
      res.clearCookie('accessToken', {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
      });
      return res.json({ data: true, message: '정상적으로 회원 탈퇴에 성공했습니다' });
    } else {
      res.status(500).send('올바른 입력을 받았으나 실패했습니다');
    }
  },

  withdrawalOAuth: async (req, res) => {
    const { userId, social } = req.body;

    const isMatched = await userInfo.findOne({
      where: { userId, social },
    });

    if (!isMatched) return res.json({ data: false, message: '다시 한 번 로그인해주시기 바랍니다' });

    const data = await userInfo.destroy({ where: { userId, social } });

    if (data) {
      res.clearCookie('accessToken', {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
      });
      return res.json({ data: true, message: '정상적으로 회원 탈퇴에 성공했습니다' });
    } else {
      res.status(500).send('올바른 입력을 받았으나 실패했습니다');
    }
  },
};
