const axios = require('axios')

exports.checkCharge = async (req, res) => {

    const token = process.env.TOKEN
    const reference = req.params.id
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }

    await axios.get(`https://api.paystack.co/charge/${reference}`, {
        headers: headers
    }).then((resp) => {

        if (resp) {

            res.send(resp.data)

        }
    }).catch((err) => {
        res.send(err.message)
    })

}