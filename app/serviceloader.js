import AuthService from '../services/authservice'


/**
 * Inject all the dependencies as required.
 */
module.exports = app => {

  const authService = new AuthService()

  authService.secret = app.get('secret')
  authService.expiryTime = app.get('expiryTime')
  authService.expiryFactor = app.get('expiryFactor')

  app.set('authService', authService)

}
