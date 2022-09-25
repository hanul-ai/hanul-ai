const express = require("express");
const { Sequelize } = require("sequelize");
const { db, sequelize, Sequelize } = require("../../models/init-models");

const router = express.Router();

//test api
router.get("/test", async(req, res, next) => {
    res.status(200).send({
        data: "hello",
    })
});

//register
router.post("/register" ,async(req, res, next) => {

});

//login
router.post("/login", async(req, res, next) => { //post의 경우 대부분 body값으로 전달
    // let { data } = req.query;
    let { email, password } = req.body;

    let sql = `select email, password from user where email='${email}'`;

    try {
        let a = await Sequelize.query(sql);

        res.status(200).send({
            data: true,
        });
    } catch(err) {
        res.status(500).send({
            data: false,
        });
    }
});

//forgot password (send mail)

module.exports = router;