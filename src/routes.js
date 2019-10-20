const express = require('express')
const Routes = express.Router()

const DashboardController = require('./controllers/DashboardController')

Routes.get('/dashboard', DashboardController.index)
