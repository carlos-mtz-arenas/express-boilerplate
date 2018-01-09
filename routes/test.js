import { authService } from '../services/authservice'

module.exports = app => {
  app.get('/test', (req, res) => {
    const tstToken = {
      thisis: 'nice :D'
    }

    const fakeToken =
      authService.encodeToken(tstToken)

    res.json({
      hello: 'world :) <3',
      fakeToken
    })
  })

  app.get('/authorized/test', (req, res) => {

    res.json({
      payload: authService.decodeToken(req.headers.Authorization),
      isTokenValid: authService.isTokenValid(req.headers.Authorization)
    })

  })
}
