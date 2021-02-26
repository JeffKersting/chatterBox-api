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
