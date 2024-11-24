const db = require("../database/models");
const bcryptjs = require("bcryptjs");
const op = db.Sequelize.Op;
const users = db.User;

const usersController = {
    showRegister: function(req, res){
        return res.render(`register`)
    },

    showLogin: function(req, res){
        return res.render(`login`);
    },


    register: function(req, res){
        
    },


    login: function(req, res){

    },

    profile: function(req, res){
        return res.render(`profileUser`)
    },

    logout: function(req, res){
        
    }

}
module.exports = usersController;