const express = require('express');
const router = express.Router();

const {
  getAllTasks,
  createNewTask,
  changeTaskInfo,
  deleteTask
} = require('../controllers/task.controller');

router.get('/allTasks', getAllTasks);
router.post('/createNewTask', createNewTask);
router.patch('/updateTask', changeTaskInfo);
router.delete('/deleteTask', deleteTask);

module.exports = router;