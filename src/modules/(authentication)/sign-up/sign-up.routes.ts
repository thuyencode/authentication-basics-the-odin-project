import e from 'express'
import { showSignUpPage } from './sign-up.controllers'

const sign_up_routes = e.Router()

sign_up_routes.get('/', showSignUpPage)

export default sign_up_routes
