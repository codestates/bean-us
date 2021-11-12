const {beanInfo, userBean} = require('./../models');
const {Op, fn, col, literal} = require('sequelize');
const {isAuthorized} = require('./functions/index.js');

module.exports = {
  allBeans: (req, res) => {
    const userBeanWhere = {[Op.or]:[{userId: null}]}
    const accessTokenInfo = isAuthorized(req);
    
    if(accessTokenInfo !== null){
      userBeanWhere[Op.or].push({userId: accessTokenInfo.userId});
    }

    beanInfo.findAll({
      raw: true,
      attributes: [
        'beanId', 'beanName', 'origin', 'fragrance',
        'acidity', 'sweetness', 'bitterness', 'body',
        'beanImage', ['description', 'desc'],
        [literal(`CASE WHEN userBeans.userId = 'test1' THEN true ELSE false END`), 'like']
      ],
      include: [
        {
          model: userBean,
          required: false,
          attributes: [],
          where: userBeanWhere
        },
      ],
      order: [['beanId', 'asc']],
    }).then(result => {
      const beanInfoList = [...result];

      userBean.findAll({
        raw: true,
        attributes: ['beanId', [fn('COUNT', col('userId')), 'likeCount']],
        group: ['beanId'],
        order: ['beanId']
      }).then(result => {
        for(let i in beanInfoList){
          for(let j in result){
            if(beanInfoList[i].beanId === result[j].beanId){
              beanInfoList[i]['likeCount'] = result[j]['likeCount'];
              break;
            }else{
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
    const userBeanWhere = {[Op.or]:[{userId: null}]}
    const accessTokenInfo = isAuthorized(req);
    
    if(accessTokenInfo !== null){
      userBeanWhere[Op.or].push({userId: accessTokenInfo.userId});
    }

    for(let param in params){
      if(param === 'bean' && params['bean'] !== ''){
        beanInfoWhere['beanName'] = {[Op.like] : `%${params[param]}%`}
      }else{
        if(params[param] !== ''){
          beanInfoWhere[param] = {
              [Op.or]: params[param].split(',').map(item => {
                return Number(item)
              })
            };
        }
      }
    }

    beanInfo.findAll({
      raw: true,
      attributes: [
        'beanId', 'beanName', 'origin', 'fragrance',
        'acidity', 'sweetness', 'bitterness', 'body',
        'beanImage', ['description', 'desc'],
        [literal(`CASE WHEN userBeans.userId = 'test1' THEN true ELSE false END`), 'like']
      ],
      include: [
        {
          model: userBean,
          required: false,
          attributes: [],
          where: userBeanWhere
        },
      ],
      where: beanInfoWhere,
      order: [['beanId', 'asc']],
    }).then(result => {
      const beanInfoList = [...result];

      userBean.findAll({
        raw: true,
        attributes: ['beanId', [fn('COUNT', col('userId')), 'likeCount']],
        group: ['beanId'],
        order: ['beanId']
      }).then(result => {
        for(let i in beanInfoList){
          for(let j in result){
            if(beanInfoList[i].beanId === result[j].beanId){
              beanInfoList[i]['likeCount'] = result[j]['likeCount'];
              break;
            }else{
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

  findBeanPost: (req, res) => {

  },
};
