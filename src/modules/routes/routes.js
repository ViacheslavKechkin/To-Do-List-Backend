const express = require('express');
const router = express.Router();

const {
  getAllTasks,
  createTask,
  changeTaskInfo,
  deleteTask
} = require('../controllers/task.controller');

router.get('/allTasks', getAllTasks);
router.post('/createTask', createTask);
router.patch('/updateTask', changeTaskInfo);
router.delete('/deleteTask', deleteTask);

module.exports = router;