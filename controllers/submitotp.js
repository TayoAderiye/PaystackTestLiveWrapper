const axios = require('axios')

exports.submitOtp = async (req, res) => {
    var payload = req.body
    const token = process.env.TOKEN
    var data = {
        otp: payload.otp,
        reference: payload.reference
    }

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }

    await axios.post('https://api.paystack.co/charge/submit_otp', data, {
        headers: headers
    }).then((resp) => {
        if (resp) {

            res.send(resp.data)
        }
    }).catch((err) => {
        res.send(err.message)
    })
}