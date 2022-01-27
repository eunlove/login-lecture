"use strict";

const { reduce } = require("async");

class UserStorage{
    static #users = {
    id:["test","test2"],
    psword:["1234","1234"],
    name:["이름1","이름2"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers= fields.reduce((newUsers,field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        // console.log(newUsers);
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser,info) =>{
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;