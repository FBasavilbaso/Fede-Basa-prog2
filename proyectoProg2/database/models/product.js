module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        imagen: {
            type: dataTypes.STRING
        },
        producto: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        },
    };
    let config = {
        tableName: 'products',
        timestamps: false,
        underscored : true
    };
    const Product = sequelize.define(alias, cols, config);
    return Product;
}