const dotenv = require("dotenv")
dotenv.config()
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const nodeFetch = require('node-fetch')


const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const cors = require("cors")
const { url } = require("inspector")
const { hasUncaughtExceptionCaptureCallback } = require("process")
app.use(cors())

app.use(express.static('dist'))

console.log(__dirname)

const appiKey = process.env.API_KEY

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
     res.send(mockAPIResponse) 
})



