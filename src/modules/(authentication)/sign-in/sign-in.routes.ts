import e from 'express'
import passport from 'passport'
import { showSignInPage } from './sign-in.controllers'

const sign_in_routes = e.Router()

sign_in_routes.get('/', showSignInPage)

sign_in_routes.post(
  '/',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/sign-in'
  })
)

export default sign_in_routes
