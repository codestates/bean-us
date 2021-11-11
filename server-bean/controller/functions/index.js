require('dotenv').config();
const { beanInfo } = require('../../models');
const { sign, verify } = require('jsonwebtoken');

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESSTOKEN_SECRET_KEY, { expiresIn: '1h' });
  },

  sendAccessToken: (res, accessToken) => {
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
    });
  },
};
