const express = require("express");

const router = express.Router();

//test api
router.get("/test", async(req, res, next) => {
    res.status(200).send({
        data: "hello",
    })
});

//회원가입

//로그인

//비밀번호 찾기 -> 메일전송?

module.exports = router;