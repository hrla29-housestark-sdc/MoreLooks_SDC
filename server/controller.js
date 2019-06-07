const dbhelpers = require('../database/dbhelpers.js');

const controller = {
  get: (req, res) => {
    
    dbhelpers.get()
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send(err))
  }
  // getpurses: (req, res) => {
  //   dbhelpers.get('Helmer Thompson DVM')
  //     .then(data => res.status(200).send(data))
  //     .catch(err => res.status(404).send(err))
  // },
  // getshoes: (req, res) => {
  //   dbhelpers.get('shoe')
  //     .then(data => res.status(200).send(data))
  //     .catch(err => res.status(404).send(err))

  // },
  // getearrings: (req, res) => {
  //   dbhelpers.get('earrings')
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