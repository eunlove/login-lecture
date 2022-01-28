"use strict";

const id = document.querySelector("#id"),  //register.ejs에서 id값을 가져올때는 #을 붙여주고 태그를 가져올경우 #을 뺀다.
name = document.querySelector("#name"),
psword = document.querySelector("#psword"),
confirmPsword = document.querySelector("#confirm-psword"),
registerBtn = document.querySelector("#btn_register");

registerBtn.addEventListener("click" , register);

function register() {
    if(!id.value) return alert("아이디를 입력해주십시요.");
    if(psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.");
    
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
        
    };
    
    fetch("/register", {
        method: "POST", 
        headers:{       
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req), 
    })
        .then((res)=> res.json())
        .then((res)=> {
          if(res.success){
              location.href = "/login";
          }else{
              alert(res.msg);
          }
      })
        .catch((err) => {
            console.error(err);
        });
}


// "use strict";

// const id = document.querySelector("#id"),  //register.ejs에서 id값을 가져올때는 #을 붙여주고 태그를 가져올경우 #을 뺀다.
// name = document.querySelector("#name"),
// psword = document.querySelector("#psword"),
// confirmPsword = document.querySelector("#confirm-psword"),
// btnRegister = document.querySelector("#btn_register");


// btnRegister.addEventListener("click" , register);
// console.log("정상??");

// function register() {
//     const req = {
//         id: id.value,
//         name: name.value,
//         psword: psword.value,
//         confirmPsword:confirmPsword.value,
//     };
//     fetch("/register",{
//         method: "POST", 
//         headers:{       // 내가 요청한데이터가 JSON형태인걸 알려주기위해
//             "Content-Type":"application/json"
//         },
//         body: JSON.stringify(req), 
//     }).then((res)=> res.json()) //서버로부터 응답이오면
//       .then((res)=> {
//           if(res.success){
//               location.href = "/register"; //정상이면 로그인페이지로 
//           }else{
//               alert(res.msg);
//           }
//       })
//         .catch((err) =>{
//             console.error("회원가입중 에러 발생");
//         });
// }
