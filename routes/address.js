const express = require('express');
const router = express.Router();
const controller = require('../controllers/address');

router.post('/',controller.new);
router.get('/',controller.list);
router.get('/:id',controller.getOne);
router.put('/',controller.update);
router.delete('/',controller.delete);

module.exports = router;