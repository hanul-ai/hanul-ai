const express = require("express");

const router = express();

const api = {
    mainRouter: require("./api/main"),
    uploadRouter: require("./api/uploads"),
    adminRouter: require("./api/admin"),
};

router.use("/api", api.mainRouter);
router.use("/api/uploads", api.uploadRouter);
// router.use("/api/admin", api.adminRouter);

module.exports = router;