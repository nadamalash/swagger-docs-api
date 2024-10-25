const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

dotenv.config({ path: "config.env" });
const { dbConnection } = require("./config/database");
const docRoute = require("./routes/docRoute");
const swaggerRoute = require("./routes/swaggerRoute");

//DB Connection
dbConnection();

//express app
const app = express();

//Middlewares
app.use(
  express.json(),
  cors({
    origin: process.env.CLIENT_DOMAIN,
  })
); //To convert req body from encoded string to json
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(process.env.NODE_ENV);
}

//Mount Routes
app.use("/api/v1/doc", docRoute);
app.use("/api/v1/swagger", swaggerRoute);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
