const express = require('express');
const cors = require('cors');

const mongoose = require("mongoose");
const app = express();
const PORT = 8000;

const { Schema } = mongoose;

const taskScheme = new Schema({
  text: String,
  isCheck: Boolean
});

const Task = mongoose.model("tasks", taskScheme);


app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://vykechkin:kechkin123@cluster0.w2ver.mongodb.net/toDoListDB?retryWrites=true&w=majority";
mongoose.connect(uri);

app.get('/allTasks', (req, res) => {
  Task.find().then(result => {
    console.log(result);
    res.send({ data: result });
  });
});

app.listen(PORT, () => {
  console.log(`Example app lestening on port ${PORT}!`)
});
