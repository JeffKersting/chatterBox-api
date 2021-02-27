const express = require('express')
const knex = require('./db/knex.js')
const cors = require('cors')
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')


const app = express();

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => console.log(`Listening on port ${port}`))



app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true} ))
app.use(cors())


app.get('/users', async (req, res) => {
  try {
    const users = await knex('users').select()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error })
  }
})

app.get('/messages', async (req, res) => {
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
