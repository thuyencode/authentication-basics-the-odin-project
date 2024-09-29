import { compare } from 'bcrypt-ts'
import passport from 'passport'
import { Strategy } from 'passport-local'
import { selectUserById, selectUserByUsername } from './db/users.db'

function initPassport() {
  passport.use(
    new Strategy(async (username, password, done) => {
      try {
        const user = await selectUserByUsername(username)

        if (!user) {
          return done(null, false, { message: 'Incorrect username' })
        }

        const match = await compare(password, user.hash)

        if (!match) {
          return done(null, false, { message: 'Incorrect password' })
        }

        return done(null, user)
      } catch (err) {
        return done(err)
      }
    })
  )

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await selectUserById(Number(id))

      done(null, user)
    } catch (err) {
      done(err)
    }
  })
}

export default initPassport
