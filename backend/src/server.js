require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3333;

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
if (!process.env.MONGO_URL) {
  throw new Error("Please add the MONGO_URL environment variable");
}
mongoose.connect(process.env.MONGO_URL);
mongoose.Promise = Promise;


const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected to db"));

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.raw({ type: "text/html" }));

app.use(cors());

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

const listsRouter = require("./routes/lists");
app.use("/lists", listsRouter);

app.listen(port, () =>
  console.log(`server started, listening at http://localhost:${port}`)
);