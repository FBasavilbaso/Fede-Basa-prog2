const db = require("../database/models");
const bcryptjs = require("bcryptjs");
const op = db.Sequelize.Op;
const products = db.Product;


const productsController = {
    products: function(req, res){
        let filtrado = {
            include: [
              {association: "user"}],
            order:[["createdAt", "DESC"]],
          };

        products.findAll(filtrado)
        .then(function(results){
            return res.render(`homePage`, {products: results});
        })
        .catch(function(e) {
            return console.log(e);
         });
    },

    productDetail: function(req, res){
        const id = req.params.id;
        let filtro = {
            include : [
                {association: "user"}
            ]
        }
        products.findByPk(id, filtro)
        .then(function(results){
            return res.render(product, {product: results});
        })
        .catch(function(e) {
            return console.log(e);
        });
    },

    productAdd: function(req, res){
        return res.render(`product-add`);
    },

    search: function(req, res){
        const search = req.query.search;
        let filtro = {
            where: {producto: {[op.like]: `%${search}%`}},
            include: [
                {association: "user"}],
              order:[["createdAt", "DESC"]],
        }
        products.findAll(filtro)
        .then(function(results){
            return res.render('search-results', {product: results});
        })
        .catch(function(e) {
            return console.log(e);
         });
    }
};

module.exports = productsController;


