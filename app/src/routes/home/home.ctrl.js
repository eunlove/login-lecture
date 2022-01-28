"use strict";

const User = require("../../models/User");

const output = {
    home: (req, res) =>{
        res.render("home/index");
    },
    
    
    login:  (req, res) => {
        res.render("home/login");
    },
    
    register:  (req, res) => {
        res.render("home/register");
    }
};    



const process = {
    login: async  (req,res) =>{
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    register: async  (req,res) =>{
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },
};
    
module.exports = {
    output,
    process,
};



//기존 페이지를 전달하는것에서 output으로 변경 
// const home = (req,res) =>{
//     res.render("home/index");
// };


// const login = (req,res) => {
//     res.render("home/login");
// };


// module.exports = {
//     home, login,
// };