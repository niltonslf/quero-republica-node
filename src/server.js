const express = require('express')
const cors = require('cors')
const app = express()

const routes = require('./routes')

app.use(express.json())
app.use(cors())
app.use(routes)

const port = 3333
app.listen(port, () => {
  console.log(`Server started on: http://localhost:${port}`)
})
