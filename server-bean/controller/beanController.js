const {beanInfo, userBean, sequelize} = require('./../models')
const {Op, fn, col} = require('sequelize');

module.exports = {
  allBeans:  (req, res) => {
    beanInfo.findAll({
      subQuery: false,
      raw: true,
      attributes: [
        'beanId', 'beanName', 'origin', 'fragrance',
        'acidity', 'sweetness', 'bitterness', 'body',
        'beanImage', ['description', 'desc'],
        [fn('COUNT', col('userBeans.userId')), 'likeCount']
      ],
      include: [
        {model: userBean, required: false, attributes: []}
      ],
      group: [
        'beanId', 'beanName', 'origin', 'fragrance',
        'acidity', 'sweetness', 'bitterness', 'body',
        'beanImage', 'desc'
      ],
      order: [['beanId', 'asc']],

    }).then(result => {
      res.status(200).json({
        message: 'success',
        beanList: result,
      });
    });
  },

  filterBeans: (req, res) => {
    const params = req.query;
    const where = {};

    for(let param in params){
      if(param === 'bean' && params['bean'] !== ''){
        where['beanName'] = {[Op.like] : `%${params[param]}%`}
      }else{
        if(params[param] !== ''){
            where[param] = {
              [Op.or]: params[param].split(',').map(item => {
                return Number(item)
              })
            };
        }
      }
    }

    beanInfo.findAll({
      subQuery: false,
      raw: true,
      attributes: [
        'beanId', 'beanName', 'origin', 'fragrance',
        'acidity', 'sweetness', 'bitterness', 'body',
        'beanImage', ['description', 'desc'],
        [fn('COUNT', col('userBeans.userId')), 'likeCount']
      ],
      include: [
        {model: userBean, required: false, attributes: []}
      ],
      where: where,
      group: ['beanId', 'beanName', 'origin', 'fragrance', 'acidity', 'sweetness', 'bitterness', 'body', 'beanImage', 'desc'],
      order: [['beanId', 'asc']],

    }).then(result => {
      res.status(200).json({
        message: 'success',
        beanList: result,
      });
    });
  },
};
