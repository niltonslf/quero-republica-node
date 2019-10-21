const axios = require('axios')

const api = axios.create({
  baseURL: 'http://webapp152181.ip-45-33-7-164.cloudezapp.io:8001/api'
})

module.exports = api
