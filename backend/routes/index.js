const express = require("express");

const router = express();

const api = {
    mainLoginRouter: require("./api/main_login"),
    mainPasswordRouter: require("./api/main_password"),
    mainRegisterRouter: require("./api/main_register"),
    uploadRouter: require("./api/uploads"),
};

router.use("/api", api.mainLoginRouter, api.mainPasswordRouter, api.mainRegisterRouter);
router.use("/api/uploads", api.uploadRouter);

module.exports = router;