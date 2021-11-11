const {beanInfo, userBean, sequelize} = require('./../models')

module.exports = {
  allBeans:  (req, res) => {
    beanInfo.findAll({
      subQuery: false,
      raw: true,
      // attributes: ['beanId', 'beanName', 'origin', 'fragrance', 'acidity', 'sweetness', 'bitterness', 'body', 'beanImage', ['description', 'desc']],
      // attributes: [[sequelize.fn('COUNT', sequelize.col('userBeans.userId'), 'likeCount')]],
      attributes: ['beanId', 'beanName', 'origin', 'fragrance', 'acidity', 'sweetness', 'bitterness', 'body', 'beanImage', ['description', 'desc'], [sequelize.fn('COUNT', sequelize.col('userBeans.userId')), 'likeCount']],
      include: [
        {model: userBean, required: false, attributes: []}
      ],
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
