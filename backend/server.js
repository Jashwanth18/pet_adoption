const express = require("express");
const cors = require("cors");
const ConnectDB = require('./config/dbconnect');

const app = express();

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//json
app.use(express.json({ extended: false }));
app.use(cors());

// Mongoose Database connection
ConnectDB();

require("dotenv").config();
const port = process.env.PORT || 3002;


app.listen(port, () => {
    console.log(`Server started on port ${port}!`);
});
  