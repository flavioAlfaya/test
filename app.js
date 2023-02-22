const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 5000

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log(req)
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    console.log(req.body)
})

app.listen(port, () => {
    console.log([`${process.env.npm_package_name} listening on port ${port}`])
})

process.on("uncaughtException",(error,origin)=>{
    console.log([`\n${origin} -  ${error}`])
})

process.on("unhandledRejection",(error)=>{
    console.log([`\n rejeitado -  ${error}`])
})
