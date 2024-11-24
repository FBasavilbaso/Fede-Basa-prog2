const db = require("../database/models");
<<<<<<< Updated upstream
const bcryptjs = require('bcryptjs');
=======
const bcryptjs = require("bcryptjs");
>>>>>>> Stashed changes
const op = db.Sequelize.Op;
const users = db.User;

const usersController = {
    register: function(req, res){
        return res.render(`register`);
    },

    login: function(req, res){
        return res.render(`login`);
    },

    profile: function(req, res){
        return res.render(`profileUser`)
    },

    loginPost: function(req, res){

    },
}
module.exports = usersController;