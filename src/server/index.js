const dotenv = require("dotenv")
dotenv.config()
const express = require('express')
const nodeFetch = require('node-fetch')
const axios = require('axios')
const path = require("path")


const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const cors = require("cors")
app.use(cors())

app.use(express.static('dist'))

console.log(__dirname)

const appiKey = process.env.API_KEY

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')

})

app.post('/postData', async(request, response) => {
    const articleAnalysis = await nodeFetch((`https://api.meaningcloud.com/sentiment-2.1?key=${appiKey}&url=${request.body.inputTextUrl}&lang=en`))
    try {
        const apiData = await articleAnalysis.json();
        console.log(apiData)
        response.send(apiData);
    }catch(err) {
        console.log(err)
    }
})



