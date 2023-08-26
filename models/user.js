'use strict';
const {
  Model
} = require('sequelize');
const { hashedPassword } = require('../helper/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type : DataTypes.STRING,
      allowNull : false,
      unique : {args : true, msg : 'Username already exists'},
      validate : {
        notEmpty : {
          msg : 'Username cannot be empty'
        },
        notNull : {
          msg : 'Invalid username'
        },
      }
    },
    fullname: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : {
          msg : 'Fullname cannot be empty'
        },
        notNull : {
          msg : 'Fullname username'
        },
      }
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : {
          msg : 'password cannot be empty'
        },
        notNull : {
          msg : 'password username'
        },
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user) =>{
    user.password = hashedPassword(user.password)
  })
  
  return User;
};