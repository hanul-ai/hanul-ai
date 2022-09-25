const express = require("express");

const router = express();

const api = {
    mainRouter: require("./api/main"),
    uploadRouter: require("./api/uploads"),
};

router.use("/api", api.mainRouter);
router.use("/api/uploads", api.uploadRouter);

module.exports = router;