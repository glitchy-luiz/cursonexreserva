const express = require('express')
const app = express()

const porta = process.env.PORT || 3535

app.use(express.urlencoded({extended:false}))
//caso queira conectar o css no site use
app.use(express.static("./assets/"))

module.exports={app,porta}