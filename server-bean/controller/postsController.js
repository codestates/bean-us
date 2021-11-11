const {post, postBean} = require('./../models');

module.exports = {
  createPost: async (req, res) => {
    const {title, content, water, waterTemp, userId, beanId, rate} = req.body;
    const createPost = await post.create({
      title, content, water, waterTemp, userId
    });

    createPost.update({postId: createPost.dataValues.id}).then(result => {
      postBean.create({beanId, postId: result.dataValues.postId, rate}).then(result => {
        res.status(201).json({
          message: '게시글이 등록되었습니다.',
        });
      });
    });
    
    // res.status(201).json({
    //   message: '게시글이 등록되었습니다.',
    // });
  },

  updatePost: (req, res) => {
    const {postId, title, content, water, waterTemp, beanId, rate} = req.body;
    post.findOne({
      where: {postId}
    }).then(result => {
      result.update({title, content, water, waterTemp, beanId, rate}).then(result => {
        res.status(201).json({
          message: '게시글이 수정되었습니다.',
        });
      })
    })

    // res.status(201).json({
    //   message: '게시글이 수정되었습니다.',
    // });
  },

  deletePost: (req, res) => {
    res.status(200).json({
      message: '게시글이 삭제되었습니다.',
    });
  },

  findAll: (req, res) => {
    res.status(200).json({
      message: 'success',
    });
  },

  findById: (req, res) => {
    res.status(200).json({
      message: 'success',
    });
  }
};
