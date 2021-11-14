const {post, postBean, beanInfo} = require('./../models');
const {Op} = require('sequelize');

module.exports = {
  createPost: async (req, res) => {
    const {title, content, water, waterTemp, userId, beanList} = req.body;
    const createPost = await post.create({
      title, content, water, waterTemp, userId
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
            message: '게시글이 수정되었습니다.',
            post,
            beanList
          });
        });
      });
    });
  },

  deletePost: async (req, res) => {
    const {postId} = req.params

    await post.destroy({
      where: {postId}
    });

    await postBean.destroy({
      where: {postId}
    });

    res.status(200).json({
      message: '게시글이 삭제되었습니다.',
    });
  },

  findAll: async (req, res) => {
    const postList = await post.findAll({
      raw: true
    });
    const postbeanList = await postBean.findAll({
      raw: true,
      attributes: ['postId', 'beanId']
    });
    const beanList = await beanInfo.findAll({
      raw: true,
      attributes: ['beanId', 'beanName']
    });

    for(let postIdx of postList){
      delete postIdx.id;
      delete postIdx.updatedAt;

      const beans = [];
      for(let postBeanIdx of postbeanList){
        if(postIdx['postId'] === postBeanIdx['postId']){
          for(let beanIdx of beanList){
            if(postBeanIdx['beanId'] === beanIdx['beanId']){
              beans.push({beanId: beanIdx['beanId'], beanName: beanIdx['beanName']});
              break;
            }
          }
        }
      }

      postIdx['beans'] = beans;
    }

    res.status(200).json({
      message: 'success',
      postList
    });
  },

  findById: (req, res) => {
    const {postId} = req.params;

    res.status(200).json({
      message: 'success',
    });
  },

  findByParams: async (req, res) => {
    const {title} = req.query;

    const postList = await post.findAll({
      raw: true,
      where: {title: {[Op.like]: `%${title}%`}},
    });
    const postbeanList = await postBean.findAll({
      raw: true,
      attributes: ['postId', 'beanId']
    });
    const beanList = await beanInfo.findAll({
      raw: true,
      attributes: ['beanId', 'beanName']
    });

    for(let postIdx of postList){
      delete postIdx.id;
      delete postIdx.updatedAt;

      const beans = [];
      for(let postBeanIdx of postbeanList){
        if(postIdx['postId'] === postBeanIdx['postId']){
          for(let beanIdx of beanList){
            if(postBeanIdx['beanId'] === beanIdx['beanId']){
              beans.push({beanId: beanIdx['beanId'], beanName: beanIdx['beanName']});
              break;
            }
          }
        }
      }

      postIdx['beans'] = beans;
    }

    res.status(200).json({
      message: 'success',
      postList
    });
  },

  createPostComment: (req, res) => {
    res.status(200).json({
      message: '댓글이 등록 되었습니다.',
    });
  },

  updatePostComment: (req, res) => {
    res.status(200).json({
      message: '댓글이 수정 되었습니다.',
    });
  },

  deletePostComment: (req, res) => {
    res.status(200).json({
      message: '댓글이 삭제 되었습니다.',
    });
  },

  findPostCommentByPostId: (req, res) => {
    res.status(200).json({
    });
  },
};
