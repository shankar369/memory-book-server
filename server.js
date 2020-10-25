const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectMongodb } = require("./config/db");

// adding .env to project
require("dotenv").config({
  path: "./config/config.env",
});
// importing required config from .env file
const PORT = process.env.PORT || 5000;

// importing routes
const mainCategoryRoute = require("./routes/mainCategory.route");
const subCategoryRoute = require("./routes/subCategory.route");
const snippetRoute = require("./routes/snippet.route");

// mongodb connection
connectMongodb();

// initializing express app
const app = express();

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
  app.use(cors({ origin: process.env.CLIENT_URL }));
}

app.use(bodyParser.json());

app.use("/api", mainCategoryRoute);
app.use("/api", subCategoryRoute);
app.use("/api", snippetRoute);

app.use((req, res) => {
  res.status(404).json({
    error: "route not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
