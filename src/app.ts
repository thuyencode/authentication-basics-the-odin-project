import compression from 'compression'
import e from 'express'
import session from 'express-session'
import passport from 'passport'
import { getPublicPath, getViewsPath } from './libs/utils'
import { error_handler, undefined_routes_handler } from './middlewares'
import { sign_up_routes } from './modules/(authentication)/sign-up'
import { home_routes } from './modules/home'

const app = e()

// Setup EJS view
app.set('views', getViewsPath())
app.set('view engine', 'ejs')

// Compression middleware
app.use(compression())

app.use(session({ secret: 'cats', resave: false, saveUninitialized: false }))
app.use(passport.session())
app.use(e.urlencoded({ extended: false }))

// Setup static folder
app.use(e.static(getPublicPath()))

// Define routes
app.use(home_routes)
app.use('/sign-up', sign_up_routes)

// Handle undefined routes
app.use(undefined_routes_handler)

// Error catcher
app.use(error_handler)

export default app
