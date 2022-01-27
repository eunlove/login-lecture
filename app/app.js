"use strict"; 

//모듈
const express = require("express");
const bodyParser = require("body-parser"); //routes/home/home.ctrl.js에서 바디로 받아주기 위해 변수선언 및 npm i body-parser -s 설치
const app = express();

//라우팅
const home = require("./src/routes/home"); //소스에서 직접 불러오는거라 경로를 명시해줘야한다
                                       //현재폴더에서 라우트폴더에서 홈폴더에 있는 자바스크립트를 읽어오도록 

const PORT = 3000;

//앱 세팅
app.set("views" ,"./src/views");
app.set("view engine" , "ejs");
app.use(express.static(`${__dirname}/src/public`)); 
app.use(bodyParser.json()); //위에서 선언한 bodyParser를 미들웨어로 등록한다
//URL을 통해 전달되는 데이터에 한글,공백 등과 같은 문자가 포함될경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extends:true}));
//console.log(`${__dirname}/src/public`);

app.use("/" , home); // use : 미들웨어를 등록해주는 메소드 

module.exports = app;
