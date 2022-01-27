"use strict";

const User = require("../../models/User");

const output = {
    home: (req,res) =>{
        res.render("home/index");
    },
    
    
    login:  (req,res) => {
        res.render("home/login");
    },
};    



const process = {
    login:  (req,res) =>{

        const user = new User(req.body);
        const response = user.login();
        console.log(response);
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