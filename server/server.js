require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const db = require("./db");
const router = require("./routes");
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1", router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
