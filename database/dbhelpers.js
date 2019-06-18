const Product = require('./index.js');
// const redis = require('../server/index.js')
var itemType = ['shoes','dress','earings','bags','bracelet','purses','dress','suit','shirt','t-shirt','jacket','pants',
'watch','small bags','tie','socks','towel']
const dbhelpers = {
  
  get: () => {
    const randomItem = Math.floor(Math.random() * Math.floor(itemType.length));
    return Product.find({id: { $gte: 9000000, $lte: 10000000 } ,itemtype: itemType[randomItem]}).limit(1)
      // .then(data => data)
      // .catch(err => console.error(err))
  }

  // get: () => {
  //   const randomItem = Math.floor(Math.random() * Math.floor(itemType.length));
  //   return redis.get(itemType)
  //     .then((reply) => {
  //       if(reply){
  //         return JSON.parse(reply)
  //       }else {

  //       }
  //     })
  //     .catch(err => console.log(err))
  //   return Product.find({id: { $gte: 9000000, $lte: 10000000 } ,itemtype: itemType[randomItem]}).limit(1).explain('executionStats')
  //     .then(data => data)
  //     .catch(err => console.error(err))
  // }
 
}
module.exports = dbhelpers;
