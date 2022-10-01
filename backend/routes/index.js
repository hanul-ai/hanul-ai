const express = require("express");

const router = express();

const api = {
    mainLoginRouter: require("./api/main_login"),
    mainPasswordRouter: require("./api/main_password"),
    mainRegisterRouter: require("./api/main_register"),
    uploadRouter: require("./api/uploads"),
    // adminRouter: require("./api/admin"),
};

router.use("/api", api.mainLoginRouter, api.mainPasswordRouter, api.mainRegisterRouter);
router.use("/api/uploads", api.uploadRouter);
// router.use("/api/admin", api.adminRouter);

module.exports = router;