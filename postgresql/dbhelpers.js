// const Product = require('./index.js')
// const Seqeulize = require('sequelize')
// const Op = Seqeulize.Op;
// var itemType = ['shoes','dress','earings','bags','bracelet','purses','dress','suit','shirt','t-shirt','jacket','pants',
// 'watch','small bags','tie','socks','towel']

// module.exports = {
//   get: () => {
//      const randomItem = Math.floor(Math.random() * Math.floor(itemType.length));
//     return Product.findOne({
//       where: {
//         id: {[Op.gte]:9000000},
//         itemtype: itemType[randomItem] 
//       }
//     });
//   }
// }
