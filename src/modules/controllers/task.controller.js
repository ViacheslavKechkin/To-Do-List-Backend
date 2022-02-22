const Task = require('../../db/models/task/index');

module.exports.getAllTasks = (req, res, next) => {
  Task.find().then(result => {
    res.send({ data: result });
  });
};

module.exports.createNewTask = (req, res, next) => {
  const task = new Task(req.body);
  task.save().then(() => {
    Task.find().then(result => {
      res.send({ data: result });
    });
  }).catch(err => console.log(err));
};

module.exports.changeTaskInfo = (req, res, next) => {
  const { id } = req.body;
  Task.updateOne({ _id: id }, id).then(result => {
    Task.find({ _id: id }).then(result => {
      //добавить что то в этом месте
      console.log(result);
      res.send(result);
    });
  });
};

module.exports.deleteTask = (req, res) => {
  const id = req.query.id;
  Task.deleteOne({ _id: id }).then(() => {
    Task.find().then(result => {
      res.send({ data: result })
    });
  });
};