const Task = require('../../db/models/task/index');

module.exports.getAllTasks = (req, res, next) => {
  Task.find().then(result => {
    res.send({ data: result });
  });
};

module.exports.createTask = (req, res, next) => {
  const task = new Task(req.body);
  task.save().then(() => {
    Task.find().then(result => {
      res.send({ data: result });
    });
  }).catch(err => console.log(err));
};

module.exports.changeTaskInfo = (req, res, next) => {
  const reqObject = req.body;
  const { id } = reqObject;
  Task.updateOne({ _id: id }, reqObject).then(result => {
    Task.find().then(result => {
      res.send({ data: result });
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