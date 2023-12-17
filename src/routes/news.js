const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsControllers");
// newsController.index


// route luôn khớp từ trên xuống 
router.use("/:slug", newsController.show);
router.use("/", newsController.index);

module.exports = router;
