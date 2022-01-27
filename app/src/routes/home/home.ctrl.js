"use strict";

//유저정보를 가져오기 위해 선언
const UserStorage = require("../../models/UserStorage");

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
        const id = req.body.id,
          psword = req.body.psword;
    
    const users = UserStorage.getUsers("id","psword");
    
    const response = {};
    if(users.id.includes(id)) {
        const idx = users.id.indexOf(id);
        if(users.psword[idx]===psword){
            response.success = true;
            return res.json(response);
        }
    }
    response.success = false;
    response.msg = "로그인에 실패하였습니다."
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