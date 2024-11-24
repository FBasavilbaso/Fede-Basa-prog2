const db = require("../database/models");
const bcryptjs = require("bcryptjs");
const op = db.Sequelize.Op;
const users = db.User;

const usersController = {
    showRegister: function(req, res){
        return res.render(`register`)
    },
    register: function(req, res){
        
    },

    showLogin: function(req, res){
        return res.render(`login`);
    },

    login: function(req, res){

    },

    profile: function(req, res){
        return res.render(`profileUser`)
    },

}
module.exports = usersController;