"use strict"; 
const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login",ctrl.output.login);

router.post("/login",ctrl.process.login); //js/home의 login.js에서 post로 보낸 fetch정보를 받아오기 위함

module.exports = router;
