import e from 'express'
import { showHomePage } from './home.controllers'

const home_routes = e.Router()

home_routes.get('/', showHomePage)

export default home_routes
