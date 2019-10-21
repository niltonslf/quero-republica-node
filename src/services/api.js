const axios = require('axios')

const api = axios.create({
  baseURL: 'http://localhost:8001/api'
})

module.exports = api
