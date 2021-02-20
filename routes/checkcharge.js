const express = require('express')
const { checkCharge } = require('../controllers/checkcharge')

const router = express.Router()



router.route('/:id').get(checkCharge)



module.exports = router 