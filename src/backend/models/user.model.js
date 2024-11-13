const {sequelize,DataTypes} = require("../init");

const User = sequelize.define("Abonne",{
    id:{type:DataTypes.INTEGER,allowNull:false,primaryKey:true,autoIncrement:true},
    email:{type:DataTypes.STRING,allowNull:false,unique:true,validate:{
        isEmail:true
    }},
});

module.exports = User;