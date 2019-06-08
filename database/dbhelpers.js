const Product = require('./index.js');
var itemType = ['shoes','dress','earings','bags','bracelet','purses','dress','suit','shirt','t-shirt','jacket','pants',
'watch','small bags','tie','socks','towel']
const dbhelpers = {
  
  get: () => {
    const randomItem = Math.floor(Math.random() * Math.floor(itemType.length));
    return Product.find({id: { $gte: 9000000, $lte: 10000000 } ,itemtype: itemType[randomItem]},{itemtype: 1}).limit(1).explain('executionStats')
      .then(data => data)
      .catch(err => console.error(err))
  },
}

module.exports = dbhelpers;
