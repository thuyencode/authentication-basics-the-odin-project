import e from 'express'
import { signOut } from './sign-out.controllers'

const sign_out_routes = e.Router()

sign_out_routes.get('/', signOut)

export default sign_out_routes
