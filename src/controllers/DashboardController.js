const api = require('../services/api')

const DashboardController = {
  async index(req, res) {
    try {
      const reps = await api.get('/republic')
      res.json({
        success: true,
        message: 'Repúblicas encontradas',
        body: reps.data.body
      })
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Nenhum resultado retornado',
        body: null
      })
    }
  }
}

module.exports = DashboardController
