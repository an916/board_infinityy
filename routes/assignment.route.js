const express = require("express");
const router = express.Router();
const {getAssignment,listAssignment} = require('../handlers/assignment.handler.js')

router.route('/add').post(getAssignment)

router.route('/list').get(listAssignment)

module.exports = router
