const express = require('express');
const router = express.Router();
const post = require('./../controller/postsController');
const bean = require('./../controller/beanController');

const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'practice-beanus',
    key: function (req, file, cb) {
      let extension = path.extname(file.originalname);
      cb(null, `asset/posts/` + Date.now().toString() + extension);
    },
    acl: 'public-read-write'
  })
});

router.get('/all-posts', post.findAllPost);
router.get('/getPost', post.findByPostId);
router.get('/', post.findByParams);
router.get('/post', post.findPostByPostId);
router.post('/', upload.single('file'), post.createPost);
router.put('/', post.updatePost);
router.delete('/', post.deletePost);

router.post('/comments', post.createPostComment);
router.put('/comments', post.updatePostComment);
router.delete('/comments', post.deletePostComment);

router.get('/getBeans', bean.beanForPost);

router.post('/imageUpload', upload.single('file'), post.imageUpload);

module.exports = router;
