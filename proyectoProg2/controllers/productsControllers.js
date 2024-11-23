const db = require("../database/models");
const op = db.Sequelize.Op;
const products = db.Product;


const productsController = {
        products: function(req, res){
            return res.render(`homePage`);
    },

    productDetail: function(req, res){
        return res.render(`product`);
    },

    productAdd: function(req, res){
        return res.render(`product-add`);
    },

    search: function(req, res){
        return res.render(`search-results`);
    }
};

module.exports = productsController;