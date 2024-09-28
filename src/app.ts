import compression from 'compression'
import connectPgSimple from 'connect-pg-simple'
import e from 'express'
import session from 'express-session'
import passport from 'passport'
import pool from './db/pool'
import { getPublicPath, getViewsPath } from './libs/utils'
import { error_handler, undefined_routes_handler } from './middlewares'
import {
  sign_in_routes,
  sign_out_routes,
  sign_up_routes
} from './modules/(authentication)'
import { home_routes } from './modules/home'
import initPassport from './passport.config'

const app = e()

// Authentication
initPassport()

app.use(
  session({
    secret: process.env.FOO_COOKIE_SECRET!,
    resave: false,
    saveUninitialized: false,
    store: new (connectPgSimple(session))({
      pool
    }),
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
  })
)
app.use(passport.session())

app.use(e.urlencoded({ extended: false }))

// Setup EJS view
app.set('views', getViewsPath())
app.set('view engine', 'ejs')

// Compression middleware
app.use(compression())

// Setup static folder
app.use(e.static(getPublicPath()))

// Define routes
app.use(home_routes)
app.use('/sign-up', sign_up_routes)
app.use('/sign-in', sign_in_routes)
app.use('/sign-out', sign_out_routes)

// Handle undefined routes
app.use(undefined_routes_handler)

// Error catcher
app.use(error_handler)

export default app
