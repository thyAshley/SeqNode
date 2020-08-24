require("dotenv").config();
const express = require("express");
const router = require("./routes");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
