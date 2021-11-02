const router = require("express").Router();
const api = require("./api");

// API Routes
router.use("/api", api);

module.exports = router;