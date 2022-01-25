"use strict"; 

//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home"); //소스에서 직접 불러오는거라 경로를 명시해줘야한다
                                       //현재폴더에서 라우트폴더에서 홈폴더에 있는 자바스크립트를 읽어오도록 

const PORT = 3000;

//앱 세팅
app.set("views" ,"./src/views");
app.set("view engine" , "ejs");
app.use(express.static(`${__dirname}/src/public`)); 
//console.log(`${__dirname}/src/public`);

app.use("/" , home); // use : 미들웨어를 등록해주는 메소드 

module.exports = app;
