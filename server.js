const express = require('express');
var cors = require('cors')
const dotenv = require('dotenv');
const morgan = require('morgan')
const colors = require('colors')

// Load env vars
dotenv.config({ path: './config/config.env' });


//Route files
const charge = require('./routes/charge')
const submitotp = require('./routes/submitotp')
const checkcharge = require('./routes/checkcharge')

const app = express();

// Body parser
app.use(express.json())

app.use(cors())

//dev logging middleware

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}


// Mount routers
app.use('/api/v1/charge', charge)
app.use('/api/v1/submitotp', submitotp)
app.use('/api/v1/checkcharge', checkcharge)


const PORT = process.env.PORT || 5000

const server = app.listen(
    PORT,
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))
