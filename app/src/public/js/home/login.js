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
    
    fetch("/login",{
        method: "POST", //http
        headers:{       // 내가 요청한데이터가 JSON형태인걸 알려주기위해
            "Content-Type":"application/json"
        },
        body: JSON.stringify(req), 
    }).then((res)=> res.json())
      .then((res)=> {
          if(res.success){
              location.href = "/";
          }else{
              alert(res.msg);
          }
      })
        .catch((err) =>{
            console.error("로그인중 에러발생");
        });
}
