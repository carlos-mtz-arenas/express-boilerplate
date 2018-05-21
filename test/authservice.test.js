let chai = require('chai')
let expect = chai.expect
let AuthService = require('../services/authservice.js').default


describe('AuthService', _ => {

  describe('#token', _ => {

    let authService

    beforeEach('initialize service', () => {
      authService =
        new AuthService('secret', '24', 'hours')

      return true
    })

    it('should be a valid token', () => {
      const token =
        authService.encodeToken({ sample: 'thisis' })

      expect(authService.isTokenValid(token))
        .to.be.true
    })

  })

})


