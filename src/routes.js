const express = require('express')
const routes = express.Router()

const DashboardController = require('./controllers/DashboardController')

routes.get('/dashboard', DashboardController.index)
routes.get('/dashboard/filter', DashboardController.filter)

module.exports = routes
