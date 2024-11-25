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
            return res.render('product', {product: results});
        })
        .catch(function(e) {
            return console.log(e);
        });
    },

    showFormAdd: function(req, res){
        return res.render("product-add")
    },

    productAdd: function(req, res){
        let newProduct = req.body;
        let filtro = {include: [{association: "user"}]}
        if(newProduct.imagen == ""){
            return res.send("Debe insertar la url de la imagen del producto agregado");
        }else if (newProduct.producto == ""){
            return res.send("Debe insertar el nombre del producto agregado");
        }else if(newProduct.descripcion == ""){
            return res.send("Debe agregar una descripcion sobre el producto agregado");
        }
         
        const producto = {
            imagen: req.body.imagen,
            producto: req.body.producto,
            descripcion: req.body.descripcion,
            usuarioId: req.session.user.id,
          };
        
        products.create(producto)
        .then(function(results){
            return res.redirect("/products");
        })
        .catch(function(e) {
            return console.log(e);
         });
    },

    search: function(req, res){
        const search = req.query.search;
        if(search == ""){
            return res.render('search-results', {product: []});
        }
        
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


