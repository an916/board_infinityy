const express = require("express");
const router = express.Router();
const {createAssignment,listAssignment} = require('../handlers/assignment.handler.js')

router.route('/add').post(createAssignment)

router.route('/list').get(listAssignment)

module.exports = router
