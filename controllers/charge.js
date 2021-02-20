const axios = require('axios')

exports.charge = async (req, res) => {
    var payload = req.body

    const token = process.env.TOKEN
    var data = {
        email: payload.email,
        amount: payload.amount,
        metadata: {
            custom_fields: [
                {
                    value: payload.metadata.custom_fields[0].value,
                    display_name: payload.metadata.custom_fields[0].display_name,
                    variable_name: payload.metadata.custom_fields[0].variable_name
                }
            ]
        },

        "card": {
            "cvv": "408",
            "number": "4084084084084081",
            "expiry_month": "01",
            "expiry_year": "99"
        },
        "pin": "0000",
        reference: referenceId()
    }


    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }

    await axios.post('https://api.paystack.co/charge', data, {
        headers: headers
    }).then((resp) => {
        if (resp) {

            res.send(resp.data)
        }
    }).catch((err) => {
        res.send(err.message)
    })
}


function referenceId() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
