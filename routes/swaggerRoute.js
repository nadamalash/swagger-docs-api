const express = require("express");
const router = express.Router();
const swaggerUi = require("swagger-ui-express");
const {getDocContentById } = require("../controllers/swaggerController");

router.use(
  "/:id",
  getDocContentById,
  swaggerUi.serveFiles(),
  swaggerUi.setup()
);
module.exports = router;
