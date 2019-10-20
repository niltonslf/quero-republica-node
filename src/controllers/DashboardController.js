const api = require('../services/api')

class DashboardController {
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

  async filter(req, res) {
    const { term } = req.query

    const republics = await api.get('/republic')

    const response = republics.data.body.filter(republic => {
      const name = republic.name.toLowerCase()
      const city = republic.city.toLowerCase()
      const state = republic.state.toLowerCase()

      const lowerTerm = term.toLowerCase()

      if (
        name.includes(lowerTerm) ||
        city.includes(lowerTerm) ||
        state.includes(lowerTerm)
      )
        return republic
    })

    res.status(200).json(response)
  }
}

module.exports = new DashboardController()
