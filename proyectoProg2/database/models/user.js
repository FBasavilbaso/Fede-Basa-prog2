module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuario: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'users',
        timestamps: false,
        underscored : true
    };
    const User = sequelize.define(alias, cols, config);
    return User;
}