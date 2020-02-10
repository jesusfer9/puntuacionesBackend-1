var controller = require('../controller/usuario')
var express = require('express');
var router = express.Router();

router.get('/', controller.getAll )
router.get('/:id', controller.getById )
router.post('/', controller.insert)
router.delete('/:id', controller.remove)
router.put('/:id', controller.update)

module.exports = router;