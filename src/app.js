const fs = require('fs') //allows dev to read and write files 
const path = require('path') //allows dev to configure absolute paths

const express = require('express') //core library used in the project
const app = new express() 


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')//sets property for view engine to ejs

app.use(express.static(path.join(__dirname, 'public'))) //tells express how to find static directory and how to serve those files (using css and javascript)

const accountData = fs.readFileSync(path.join(__dirname, 'accounts.json', 'accounts.json'), 'utf8') //reads & gathers the contents of the files located at src/json/accounts.json with utf8 encoding
const accounts = JSON.parse(accountData)//parses accountData into a readable JSON string

const userData = fs.readFileSync(path.join(__dirname, 'json', 'user.json'), 'utf8') //reads & gathers the contents of the file located at src/json/user.json with UTF8 encoding
const users = JSON.parse(userData) //parses userData into a readable JSON string

app.get('/', (req, res) => res.render('index', {title: 'Account Summary', accounts: accounts })) //this is the index route | app.get takes two parameters, first a url path and then a callback function which takes two parameters itself, which immediately renders an index view with the tile being 'account summary', then creating a new key value pair "accounts: accounts"
app.get('/savings', (req, res) => res.render('account', {account: accounts.savings })) //this route points to the "savings" URL path, then renders the account view to the screen
app.get('/checking', (req, res) => res.render('account', {account: accounts.checking }))//this route points to the "savings" URL path, then renders the account view to the screen
app.get('/credit', (req, res) => res.render('account', {account: accounts.credit }))//this route points to the "savings" URL path, then renders the account view to the screen

app.get('/profile', (req, res) => res.render('profile', {user: users[0] }))

app.listen(3000, () => {console.log('PS Project Running on port 3000!') })