const express = require("express");
const morgan = require("morgan");
//routes
const userRouter = require("./routes/user");
const recipeRouter = require("./routes/recipe");

const app = express();
//MIDILWARE ================================
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//static floder
app.use(express.static(`${__dirname}/public`));
//parsing
app.use(express.json());

//MIDILWARE ROTE===================================

app.use("/api/v1/", recipeRouter);
app.use("/api/v1/", userRouter);

module.exports = app;
