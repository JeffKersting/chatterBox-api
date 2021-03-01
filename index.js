const express = require('express')
const app = express();
const knex = require('./db/knex.js')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const httpServer = require('http').Server(app)

app.set('port', process.env.PORT || 3000)

const server = app.listen(app.get('port'), () => console.log(`Listening on port ${port}`))

const io = require('socket.io')(httpServer, {
  cors: {
    origin: '*',
    allowHeaders: '*',
    credentials: true
  }
})



app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next()
})

io.on('connection', (socket) => {
  socket.on('message', (data) => {
    if (data) {
      io.sockets.emit('change', true)
    }
  })
})

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true} ))
app.use(cors())

app.get('/api/v1/users', async (req, res) => {
  try {
    const users = await knex('users').select()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error })
  }
})

app.get('/api/v1/messages', async (req, res) => {
  try {
    const messages = await knex('messages').select()
    res.status(200).json(messages)
  } catch (error) {
    res.status(500).json({ error })
  }
})

app.post('/messages', async (req, res) => {
  try {
    const message = await knex('messages').insert({
      message: req.body.message,
      user_name: req.body.user_name
    }, 'message')
    res.status(201).json( { message } )
  } catch (error) {
    res.status(500).json( { error } )
  }
})

app.post('/users', async (req, res) => {
  try {
    const user = await knex('users').insert({
      user: req.body.user,
      password: 'password'
    }, 'user')
    res.status(201).json( { user } )
  } catch (error) {
    res.status(500).json( { error } )
  }
})
