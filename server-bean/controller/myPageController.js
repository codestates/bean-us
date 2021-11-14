const {isAuthorized} = require('./functions/index.js');
const {userInfo, userBean, beanInfo} = require('./../models');

module.exports = {
  myInfo: (req, res) => {
    // const accessTokenInfo = isAuthorized(req);

    // if(!accessTokenInfo){
    //   res.status(400).json({
    //     message: '로그인하여 주십시오.'
    //   });
    // }

    userInfo.findOne({
      attributes: ['userId', 'email', 'social'],
      where: {userId: req.query.userId}
    }).then(result => {
      res.status(200).json({
        userInfo: result,
      });
    });
  },

  myBeans: (req, res) => {
    // const accessTokenInfo = isAuthorized(req);

    // if(!accessTokenInfo){
    //   res.status(400).json({
    //     message: '로그인하여 주십시오.'
    //   });
    // }

    userBean.findAll({
      attributes: [],
      include: [
        {
          model: beanInfo,
          attributes: ['beanId', 'beanName'],
        }
      ],
      where: {userId: req.query.userId}
    }).then(result => {
      res.status(200).json({
        beans: result
      });
    });
  },

  myPosts: (req, res) => {

  },
};
