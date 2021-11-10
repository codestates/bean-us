module.exports = {
  login: (req, res) => {
    console.log(req.body);
    res.send('안녕하세요');
  },
  signupCheck: () => {},
  signup: () => {},
  logout: () => {},
};
