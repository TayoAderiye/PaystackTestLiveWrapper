const express = require('express')
const { charge } = require('../controllers/charge')

const router = express.Router()



router.route('/').post(charge)



module.exports = router 