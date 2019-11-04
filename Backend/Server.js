const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const TodoRoute = require("./routes/TodoRoute");

const port = process.env.PORT || 4000;
const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use("/api.todoapp.in", TodoRoute);

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to db")
);

app.listen(port, () => {
  console.log(`Server Started At ${port}`);
});
