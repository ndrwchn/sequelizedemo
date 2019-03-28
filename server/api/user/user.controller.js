'use strict'

const models = require('../../models/db')

exports.test = (req, res) => {
  res.send('API user route works!');
}

exports.allUsers = (req, res) => {
  models.User.findAll()
  .then( users => {
      res.json(users)
  })
  .catch( error =>{
      console.log('error: ', error)
      res.status(404).send(error)
  })
}

exports.getUserByEmail = (req, res) => {
  models.User.findOne(
    {
      where: { 'email': req.params.email}
    }
  )
  .then( user => {
      console.log(res.json(user))
      res.json(user)
  })
  .catch( error =>{
      console.log('error: ', error)
      res.status(404).send(error)
  })
}

