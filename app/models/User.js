const Sequelize = require('sequelize')
const db = require('./../../config/database')


let User = db.define('users',{
    user_id:{
        type:Sequelize.STRING
    },
    first_name:{
        type:Sequelize.STRING
    },
    last_name:{
        type: Sequelize.STRING
    },
    user_email:{
        type:Sequelize.STRING
    },
    user_age:{
        type:Sequelize.NUMBER
    },
    user_password:{
        type:Sequelize.STRING
    },
    avatar:{
        type:Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.DATE,
        field: 'created_at'
    }, 
    updatedAt:{
        type: Sequelize.DATE,
        field: 'updated_at'
    }
})

module.exports = User