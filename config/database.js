const db = require('sequelize')

module.exports =  new db('user_database', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  pool:{
    max:5,
    min:0,
    acquire:3000,
    idle:1000
  }
})


