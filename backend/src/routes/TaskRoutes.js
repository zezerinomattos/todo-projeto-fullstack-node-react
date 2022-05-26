const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');
const MacaddressValidation = require('../middlewares/MacaddressValidation');


router.post('/', TaskValidation, TaskController.create);
router.put('/:id', TaskValidation,TaskController.update);
router.get('/:id', TaskController.show);
router.get('/filter/all', MacaddressValidation, TaskController.all);

module.exports = router;