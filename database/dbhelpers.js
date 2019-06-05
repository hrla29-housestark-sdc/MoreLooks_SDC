const Product = require('./index.js');

const random = (data) => {
  return Math.floor(Math.random() * data.length)
}

const dbhelpers = {
  get: (querystring) => {
    return Product.find({itemtype: querystring})
      .then(data => data[random(data)])
      .catch(err => console.error(err))
  },
}

module.exports = dbhelpers;