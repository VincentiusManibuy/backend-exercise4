const express = require('express')
const app = express()
const port = 4000
const moment = require('moment/moment')
const data = require('./member')
const user = require('./user')

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/about', (req, res) => {
    res.json({
        status: "success",
        message: "response success",
        desc: "exercise #03",
        date: moment().calendar(),
        data: data
    })
})

app.get('/user', (req, res) => {
    res.setHeader("Content-Type", "text/json")
    res.json(user)
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})