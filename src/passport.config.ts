import passport from 'passport'
import { Strategy } from 'passport-local'
import { selectUserById, selectUserByUsername } from './db/users.db'
import { verifyPassword } from './libs/utils'

function initPassport() {
  passport.use(
    new Strategy(async (username, password, done) => {
      try {
        const user = await selectUserByUsername(username)

        if (!user) {
          return done(null, false, { message: 'Incorrect username' })
        }

        const match = await verifyPassword(password, user.password)

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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    done(null, user.id)
  })

  passport.deserializeUser(async (id, done) => {
    try {
      const user = selectUserById(Number(id))

      done(null, user)
    } catch (err) {
      done(err)
    }
  })
}

export default initPassport
