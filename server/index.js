const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('./config/dev')
const mongoose = require('mongoose')

const articleRoutes = require('./routes/article')
const usersRoutes = require('./routes/users')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB connection')
});

app.use('/api/v1/article', articleRoutes)
app.use('/api/v1/users', usersRoutes)

app.listen(3000, () => console.log('I am running'))