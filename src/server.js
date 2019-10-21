const express = require('express')
const cors = require('cors')
const app = express()

const routes = require('./routes')

app.use(express.json())
app.use(cors())
app.use(routes)

const port = 3333
const host = 'http://localhost'

app.listen(port, () => {
  console.log(`Server started on: ${host}:${port}`)
})
