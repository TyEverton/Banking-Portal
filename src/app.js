const fs = require('fs')
const path = require('path')
const express = require('express')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.statis(path.join(__dirname, 'public')))
