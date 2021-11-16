require('dotenv').config();

// 필요한 모듈 다운
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

// port 80으로 변경
const port = process.env.HTTP_PORT || 80;

// Router 연결
const beanRouter = require('./router/beanRouter');
const myPageRouter = require('./router/myPageRouter');
const postsRouter = require('./router/postsRouter');
const authRouter = require('./router/authRouter');

// Login, Signup, Logout 에만 바로 controller 와 연결.
const signController = require('./controller/signController');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: [
      'https://localhost:3000', 'http://localhost:3000',
      'https://www.beanus.tk', 'http://www.beanus.tk',
      'https://practic.beanus.tk', 'http://practic.beanus.tk'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  })
);

app.use(cookieParser());

app.use('/bean', beanRouter);
app.use('/my-page', myPageRouter);
app.use('/posts', postsRouter);
app.use('/auth', authRouter);

app.post('/login', signController.login);
app.post('/signup/check-id', signController.signupCheck);
app.post('/signup', signController.signup);
app.get('/logout', signController.logout);
app.get('/check-token', signController.checkToken);

// 웹화면에서 Hello bean-us 표시
app.get('/hello-bean-us', (req, res) => {
  res.status(200).send('Hello bean-us');
});

app.listen(port, () => {
  console.log(`          server listening on ${port}`);
});
