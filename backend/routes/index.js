const express = require("express");

const router = express();

const api = {
    mainRouter: require("./api/main"),
};

router.use("/api", api.mainRouter);

module.exports = router;