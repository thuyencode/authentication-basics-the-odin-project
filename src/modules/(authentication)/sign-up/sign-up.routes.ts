import e from 'express'
import { handleSignUpRequest, showSignUpPage } from './sign-up.controllers'

const sign_up_routes = e.Router()

sign_up_routes.get('/', showSignUpPage)
sign_up_routes.post('/', handleSignUpRequest)

export default sign_up_routes
