const fs = require('fs') //allows dev to read and write files 
const path = require('path') //allows dev to configure absolute paths

const express = require('express') //core library used in the project
const app = express() 

const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')//sets property for view engine to ejs

app.use(express.static(path.join(__dirname, 'public'))) //tells express how to find static directory and how to serve those files (using css and javascript)

app.get("/", (req, res) => {
  res.render('index')
} ) //app.get takes two parameters, first a url path and then a callback function which takes two parameters itself, which immediately renders an index view with the title "index"

app.listen(3000, () => {console.log('PS Project Running on port 3000!') })