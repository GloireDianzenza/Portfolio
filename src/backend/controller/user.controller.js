const { sequelize } = require("../init");
const User = require("../models/user.model");

async function getUsers(req,res,next) {
    try {
        const users = await User.findAll();
        let result = [];
        for(const u of users){
            result.push(u.dataValues);
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({error:error});
    }
}

async function isSub(req,res,next) {
    try {
        const users = await User.findOne({where:{email:req.body.email}});
        if(users === null)throw "User not signed up";
        res.status(200).json({message:"Signed up",user:users.dataValues});
    } catch (error) {
        res.status(404).json({error:error});
    }
}

async function addUser(req,res,next) {
    try {
        const users = await User.create({...req.body});
        res.status(201).json({message:"User added",id:users.dataValues.id});
    } catch (error) {
        res.status(404).json({error:error});
    }
}

module.exports = {getUsers,isSub,addUser};