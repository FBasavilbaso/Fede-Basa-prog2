const db = require("../database/models");
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
    }
};

module.exports = usersController;