const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const apiKey = process.env.API_KEY
const port = process.env.PORT
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const sentUrl = 'https://api.meaningcloud.com/sentiment-2.1'
const fetch = require('node-fetch');

const app = express()

app.use(express.static('dist'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(helmet())

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/sentiment', async function (req, res) {
    const { message } = req.body
    const finalSentimentUrl = `${sentUrl}?key=${apiKey}&of=json&txt=${message}&lang=en`;
    const result = await fetch(finalSentimentUrl).then(res => res.json())

    res.status(200).send(result);
})

app.listen(port, function () {
    console.log(`App listening on port ${port}!`)
})
