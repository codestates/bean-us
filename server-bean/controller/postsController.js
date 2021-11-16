const {post, postBean, beanInfo, postComment} = require('./../models');
const {Op} = require('sequelize');
const {isAuthorized} = require('./functions/index.js');

module.exports = {
  createPost: async (req, res) => {
    const accessTokenInfo = isAuthorized(req);
    if(!accessTokenInfo){
      res.status(400).json({
        message: '로그인이 되어있지 않습니다.',
      });
    }

    const {title, content, water, waterTemp, beanList} = req.body;
    const createPost = await post.create({
      title, content, water, waterTemp, userId: accessTokenInfo.userId
    });

    createPost.update({
      postId: createPost.dataValues.id
    }).then(result => {
      for(let bean of beanList){
        bean['postId'] = result.dataValues.postId;
      }
      
      postBean.bulkCreate(beanList).then(postBeans => {
        const post = result.dataValues;
        delete post.id;
        delete post.updatedAt;

        let beanList = [];

        for(let beanItem of [...postBeans]){
          delete beanItem.dataValues.id;
          delete beanItem.dataValues.createdAt;
          delete beanItem.dataValues.updatedAt;
          beanList = [...beanList, beanItem.dataValues];
        }

        res.status(201).json({
          message: '게시글이 등록되었습니다.',
          post,
          beanList
        });
      });
    });
  },

  updatePost: (req, res) => {
    const {postId, title, content, water, waterTemp, beanList} = req.body;
    post.findOne({
      where: {postId}
    }).then(result => {
      result.update({
        title, content, water, waterTemp
      }).then(async result => {
        await postBean.destroy({
          where: {postId}
        });

        for(let bean of beanList){
          bean['postId'] = postId;
        }

        postBean.bulkCreate(beanList).then((postBeans) => {
          const post = result.dataValues;
          delete post.id;
          delete post.updatedAt;

          let beanList = [];

          for (let beanItem of [...postBeans]) {
            delete beanItem.dataValues.id;
            delete beanItem.dataValues.createdAt;
            delete beanItem.dataValues.updatedAt;
            beanList = [...beanList, beanItem.dataValues];
          }

          res.status(201).json({
            message: '게시글이 수정되었습니다.',
            post,
            beanList,
          });
        });
      });
    });
  },

  updatePost: (req, res) => {
    const { postId, title, content, water, waterTemp, beanList } = req.body;
    post.findOne({
      where: { postId },
    }).then((result) => {
      result.update({
        title,
        content,
        water,
        waterTemp,
      }).then(async (result) => {
        await postBean.destroy({
          where: { postId },
        });

        for (let bean of beanList) {
          bean['postId'] = postId;
        }

        postBean.bulkCreate(beanList).then((postBeans) => {
          const post = result.dataValues;
          delete post.id;
          delete post.updatedAt;

          let beanList = [];

          for (let beanItem of [...postBeans]) {
            delete beanItem.dataValues.id;
            delete beanItem.dataValues.createdAt;
            delete beanItem.dataValues.updatedAt;
            beanList = [...beanList, beanItem.dataValues];
          }

          res.status(201).json({
            message: '게시글이 수정되었습니다.',
            post,
            beanList,
          });
        });
      });
    });
  },

  deletePost: async (req, res) => {
    const { postId } = req.body;

    await post.destroy({
      where: { postId },
    });

    await postBean.destroy({
      where: { postId },
    });

    res.status(200).json({
      message: '게시글이 삭제되었습니다.',
    });
  },

  findAllPost: async (req, res) => {
    const postList = await post.findAll({
      raw: true,
      order: [['createdAt', 'DESC']]
    });
    const postbeanList = await postBean.findAll({
      raw: true,
      attributes: ['postId', 'beanId'],
    });
    const beanList = await beanInfo.findAll({
      raw: true,
      attributes: ['beanId', 'beanName'],
    });

    for (let postIdx of postList) {
      delete postIdx.id;
      delete postIdx.updatedAt;

      const beans = [];
      for (let postBeanIdx of postbeanList) {
        if (postIdx['postId'] === postBeanIdx['postId']) {
          for (let beanIdx of beanList) {
            if (postBeanIdx['beanId'] === beanIdx['beanId']) {
              beans.push({ beanId: beanIdx['beanId'], beanName: beanIdx['beanName'] });
              break;
            }
          }
        }
      }

      postIdx['beans'] = beans;
    }

    res.status(200).json({
      message: 'success',
      postList,
    });
  },

  findByPostId: async (req, res) => {
    const {postId} = req.query;

    const postOne = await post.findOne({
      attributes: ['postId', 'title', 'content', 'water', 'waterTemp', 'userId', 'createdAt'],
      where: {postId}
    });
    const postBeans = await postBean.findAll({
      where: {postId},
      include: [{
        model: beanInfo,
        attributes: ['beanName'],
      }],
    });

    const beans = [];
    for(let postBeansIdx of postBeans){
      beans.push({beanId: postBeansIdx['beanId'], beanName: postBeansIdx.beanInfo['beanName']});
    }
    
    postOne.dataValues['beans'] = beans;
    res.status(200).json({
      post: postOne,
    });
  },

  findByParams: async (req, res) => {
    const {title, userId} = req.query;
    const paramWhere = {};

    if(title){
      paramWhere['title'] = {[Op.like]: `%${title}%`};
    }

    if(userId){
      paramWhere['userId'] = userId;
    }

    const postList = await post.findAll({
      raw: true,
      where: paramWhere,
      order: [['createdAt', 'DESC']]
    });
    const postbeanList = await postBean.findAll({
      raw: true,
      attributes: ['postId', 'beanId'],
    });
    const beanList = await beanInfo.findAll({
      raw: true,
      attributes: ['beanId', 'beanName'],
    });

    for (let postIdx of postList) {
      delete postIdx.id;
      delete postIdx.updatedAt;

      const beans = [];
      for (let postBeanIdx of postbeanList) {
        if (postIdx['postId'] === postBeanIdx['postId']) {
          for (let beanIdx of beanList) {
            if (postBeanIdx['beanId'] === beanIdx['beanId']) {
              beans.push({ beanId: beanIdx['beanId'], beanName: beanIdx['beanName'] });
              break;
            }
          }
        }
      }

      postIdx['beans'] = beans;
    }
    
    res.status(200).json({
      postList,
    });
  },

  findPostByPostId: async (req, res) => {
    const postId = req.query['post-id'];
    const postOne = await post.findOne({
      raw: true,
      attributes: ['postId', 'title', 'water', 'waterTemp', 'content', 'userId', 'createdAt'],
      where: {postId}
    });
    const postBeanAll = await postBean.findAll({
      raw: true,
      attributes: ['rate'],
      include: [{
        model: beanInfo,
        attributes: ['beanName']
      }],
      where: {postId}
    });
    const commentAll = await postComment.findAll({
      raw: true,
      attributes: ['userId', 'commentId', 'comment', 'createdAt'],
      where:{postId},
      order: [['createdAt', 'DESC']]
    })

    const beanRatio = {};
    for(let postBeanAllIdx of postBeanAll){
      beanRatio[postBeanAllIdx['beanInfo.beanName']] = postBeanAllIdx['rate'];
    }
    postOne['beanRatio'] = beanRatio;

    res.status(200).json({
      postCotents: postOne,
      comments: commentAll,
    });
  },

  createPostComment: async (req, res) => {
    const accessTokenInfo = isAuthorized(req);
    if(!accessTokenInfo){
      res.status(400).json({
        message: '로그인이 되어 있지 않습니다.',
      });
    }

    const {postId, comment} = req.body.data;
    const buildComment = await postComment.build({postId, userId: accessTokenInfo.userId, comment});
    const lastComment = await postComment.findOne({order:[['commentId', 'DESC']]});

    buildComment.dataValues['commentId'] = lastComment.dataValues['commentId'] + 1;
    buildComment.save();

    res.status(200).json({
      message: '댓글이 등록 되었습니다.',
      userId: buildComment.userId,
      commentId: buildComment.commentId,
      comment: buildComment.comment,
      createdAt: buildComment.createdAt,
    });
  },

  updatePostComment: (req, res) => {
    const accessTokenInfo = isAuthorized(req);
    if(!accessTokenInfo){
      res.status(400).json({
        message: '로그인이 되어 있지 않습니다.',
      });
    }

    const {commentId, comment} = req.body.data;

    postComment.update({ comment }, { where: { commentId } }).then(() => {
      res.status(204).json({
        message: '댓글이 수정 되었습니다.',
      });
    });
  },

  deletePostComment: (req, res) => {
    const accessTokenInfo = isAuthorized(req);
    if(!accessTokenInfo){
      res.status(400).json({
        message: '로그인이 되어 있지 않습니다.',
      });
    }

    const { commentId } = req.body;

    postComment.destroy({ where: { commentId } }).then(() => {
      res.status(204).json({
        message: '댓글이 삭제 되었습니다.',
      });
    });
  },
};
