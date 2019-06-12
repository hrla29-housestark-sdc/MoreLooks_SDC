const dbhelpers = require('../database/dbhelpers.js');
const postgresqlHelper = require('../postgresql/dbhelpers.js')
const controller = {
  mongodb: {
    get: (req, res) => {
      
      dbhelpers.get()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(404).send(err))
    }
  }
  // postgresql: {
  //   get: (req, res) => {
  //     postgresqlHelper.get()
  //     .then(data => res.status(200).send(data))
  //     .catch(err => res.status(404).send(err))
  //   }
  
  // getpurses: (req, res) => {
  //   dbhelpers.get('purses')
  //     .then(data => res.status(200).send(data))
  //     .catch(err => res.status(404).send(err))
  // },
  // getshoes: (req, res) => {
  //   dbhelpers.get('shoes')
  //     .then(data => res.status(200).send(data))
  //     .catch(err => res.status(404).send(err))

  // },
  // getearrings: (req, res) => {
  //   dbhelpers.get('earings')
  //     .then(data => res.status(200).send(data))
  //     .catch(err => res.status(404).send(err))
  // },
  // getbracelets: (req, res) => {
  //   dbhelpers.get('bracelet')
  //     .then(data => res.status(200).send(data))
  //     .catch(err => res.status(404).send(err))
  // },
  // getdresses: (req, res) => {
  //   dbhelpers.get('dress')
  //   .then(data => res.status(200).send(data))
  //   .catch(err => res.status(404).send(err))
  // }
}

module.exports = controller;