"use strict";

const id = document.querySelector("#id"),  //login.ejs에서 id값을 가져올때는 #을 붙여주고 태그를 가져올경우 #을 뺀다.
psword = document.querySelector("#psword"),
btn_login = document.querySelector("#btn_login");

btn_login.addEventListener("click" , login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };
    console.log(id.value,psword.value);
    
}
