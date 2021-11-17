const { beanInfo, userBean, postBean, post } = require('./../models');
const { Op, fn, col, literal } = require('sequelize');
const { isAuthorized } = require('./functions/index.js');

module.exports = {
  allBeans: (req, res) => {
    const userBeanWhere = { [Op.or]: [{ userId: null }] };
    const accessTokenInfo = isAuthorized(req);
    const attributes = ['beanId', 'beanName', 'origin', 'fragrance', 'acidity', 'sweetness', 'bitterness', 'body', 'beanImage', ['description', 'desc']];

    if (accessTokenInfo !== null) {
      userBeanWhere[Op.or].push({ userId: accessTokenInfo.userId });
      attributes.push([literal(`CASE WHEN userBeans.userId = '${accessTokenInfo.userId}' THEN true ELSE false END`), 'like']);
    } else {
      attributes.push([fn('COALESCE', col('userBeans.userId'), String(0)), 'like']);
    }

    beanInfo
      .findAll({
        raw: true,
        attributes: attributes,
        include: [
          {
            model: userBean,
            required: false,
            attributes: [],
            where: userBeanWhere,
          },
        ],
        order: [['beanId', 'asc']],
      })
      .then((result) => {
        const beanInfoList = [...result];

        userBean
          .findAll({
            raw: true,
            attributes: ['beanId', [fn('COUNT', col('userId')), 'likeCount']],
            group: ['beanId'],
            order: ['beanId'],
          })
          .then((result) => {
            for (let i in beanInfoList) {
              for (let j in result) {
                if (beanInfoList[i].beanId === result[j].beanId) {
                  beanInfoList[i]['likeCount'] = result[j]['likeCount'];
                  break;
                } else {
                  beanInfoList[i]['likeCount'] = 0;
                }
              }
            }

            res.status(200).json({
              message: 'success',
              beanList: beanInfoList,
            });
          });
      });
  },

  filterBeans: (req, res) => {
    const params = req.query;
    const beanInfoWhere = {};
    const userBeanWhere = { [Op.or]: [{ userId: null }] };
    const accessTokenInfo = isAuthorized(req);
    const attributes = ['beanId', 'beanName', 'origin', 'fragrance', 'acidity', 'sweetness', 'bitterness', 'body', 'beanImage', ['description', 'desc']];

    if (accessTokenInfo !== null) {
      userBeanWhere[Op.or].push({ userId: accessTokenInfo.userId });
      attributes.push([literal(`CASE WHEN userBeans.userId = '${accessTokenInfo.userId}' THEN true ELSE false END`), 'like']);
    } else {
      attributes.push([fn('COALESCE', col('userBeans.userId'), String(0)), 'like']);
    }

    for (let param in params) {
      if (param === 'bean' && params['bean'] !== '') {
        beanInfoWhere['beanName'] = { [Op.like]: `%${params[param]}%` };
      } else {
        if (params[param] !== '') {
          beanInfoWhere[param] = {
            [Op.or]: params[param].split(',').map((item) => {
              return Number(item);
            }),
          };
        }
      }
    }

    beanInfo
      .findAll({
        raw: true,
        attributes: attributes,
        include: [
          {
            model: userBean,
            required: false,
            attributes: [],
            where: userBeanWhere,
          },
        ],
        where: beanInfoWhere,
        order: [['beanId', 'asc']],
      })
      .then((result) => {
        const beanInfoList = [...result];

        userBean
          .findAll({
            raw: true,
            attributes: ['beanId', [fn('COUNT', col('userId')), 'likeCount']],
            group: ['beanId'],
            order: ['beanId'],
          })
          .then((result) => {
            for (let i in beanInfoList) {
              for (let j in result) {
                if (beanInfoList[i].beanId === result[j].beanId) {
                  beanInfoList[i]['likeCount'] = result[j]['likeCount'];
                  break;
                } else {
                  beanInfoList[i]['likeCount'] = 0;
                }
              }
            }

            res.status(200).json({
              message: 'success',
              beanList: beanInfoList,
            });
          });
      });
  },

  findBeanPost: async (req, res) => {
    const postBeans = await postBean.findAll({
      raw: true,
      where: { beanId: req.query['bean-id'] },
      order: [['createdAt', 'DESC']],
    });

    const postWhere = { [Op.or]: [] };
    for (let postBeanIdx of postBeans) {
      postWhere[Op.or].push({ postId: postBeanIdx['postId'] });
    }

    const postList = await post.findAll({
      raw: true,
      attributes: ['postId', 'title', 'content', 'userId', 'createdAt'],
      where: postWhere,
    });

    const postBeansByPostId = await postBean.findAll({
      raw: false,
      where: postWhere,
      include: [
        {
          model: beanInfo,
          attributes: ['beanName']
        }
      ],
    });

    for (let postItem of postList) {
      const beans = [];
      for(let postBeanInfo of postBeansByPostId){
        if(postItem['postId'] === postBeanInfo.dataValues['postId']){
          beans.push(postBeanInfo.dataValues.beanInfo['beanName']);
        }
      }
      postItem['beans'] = beans;
    }

    res.status(200).json({
      posts: postList,
    });
  },

  beanLike: (req, res) => {
    const { beanId, beanLike } = req.body.data;
    const accessTokenInfo = isAuthorized(req);    
    if(!accessTokenInfo){
      res.status(400).json({
        message: '로그인이 되어 있지 않습니다.',
      });
    }

    if (beanLike) {
      userBean
        .create({
          userId: accessTokenInfo.userId,
          beanId,
        })
        .then(() => {
          res.status(200).json({
            message: 'success',
          });
        });
    } else {
      userBean
        .destroy({
          where: {
            userId: accessTokenInfo.userId,
            beanId,
          },
        })
        .then(() => {
          res.status(200).json({
            message: 'success',
          });
        });
    }
  },

  beanForPost: (req, res) => {
    beanInfo.findAll({
      attributes: ['beanId', 'beanName'],
    }).then(result => {
      res.status(200).json({
        beans: result
      });
    });
  },
};
