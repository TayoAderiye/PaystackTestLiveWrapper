const express = require('express')
const { submitOtp } = require('../controllers/submitotp')

const router = express.Router()



router.route('/').post(submitOtp)



module.exports = router 