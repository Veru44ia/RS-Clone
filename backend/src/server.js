// require("dotenv").config({ path: 'ENV_FILENAME' });

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected to db"));


app.use(express.json());

app.use(cors());

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

app.listen(3000, () => console.log("server started"));
