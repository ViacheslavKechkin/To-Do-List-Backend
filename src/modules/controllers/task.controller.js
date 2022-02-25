const Task = require('../../db/models/task/index');

module.exports.getAllTasks = (req, res, next) => {
  Task.find().then(result => {
    res.send({ data: result });
  });
};

module.exports.createTask = (req, res, next) => {
  const task = new Task(req.body);
  const { body } = req;
  if (body) {
    task.save().then(() => {
      Task.find().then(result => {
        res.send({ data: result });
      });
    });
  } else {
    res.status(422).send('Error! Params not correct');
  };
};

module.exports.changeTaskInfo = (req, res, next) => {
  const { body } = req;
  const { _id } = body;
  if (body.hasOwnProperty('_id') && (body.hasOwnProperty('text') || body.hasOwnProperty('isCheck'))) {
    Task.updateOne({ _id: _id }, body).then(() => {
      Task.find().then(result => {
        res.send({ data: result });
      });
    });
  } else {
    res.status(422).send('Error! Params not correct');
  };
};

module.exports.deleteTask = (req, res) => {
  const { id } = req.query;
  if (id) {
    Task.deleteOne({ _id: id }).then(() => {
      Task.find().then(result => {
        res.send({ data: result })
      });
    });
  } else {
    res.status(422).send('Error! Params not correct');
  };
};