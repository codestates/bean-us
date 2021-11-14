require('dotenv').config();
const { beanInfo } = require('../../models');
const { sign, verify } = require('jsonwebtoken');
const { NONE } = require('sequelize');

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESSTOKEN_SECRET_KEY, { expiresIn: '1h' });
  },

  sendAccessToken: (res, accessToken) => {
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    });
  },

  isAuthorized: (req) => {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) return null;
    try {
      return verify(accessToken, process.env.ACCESSTOKEN_SECRET_KEY);
    } catch (err) {
      return null;
    }
  },
};
