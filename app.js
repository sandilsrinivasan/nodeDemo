const express = require('express')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.listen(8511 , "localhost" , () => console.log('Listening on 8511'));

app.post('/api', (req, res) => {

    console.log("Received request: " + JSON.stringify(req.body));
    var sum = req.body.num + req.body.num2;
    res.json({
        "sum" : sum
    })

});

module.exports = app;
