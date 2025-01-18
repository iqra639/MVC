const {Router} = require('express');
const {getTask , saveTask , updateTask , deleteTask} = require("../controllers/TaskController");
const router = Router();

router.get('/tasks' , getTask);
router.post('/tasks' , saveTask);
router.put('/tasks/:id' , updateTask);
router.delete('/tasks/:id' , deleteTask);
module.exports = router;
