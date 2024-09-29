import { genSalt, hash as hashPwd } from 'bcrypt-ts'
import expressAsyncHandler from 'express-async-handler'
import { createNewUser } from './sign-up-services'

export const showSignUpPage = expressAsyncHandler(async (req, res) => {
  res.render('sign-up')
})

export const handleSignUpRequest = expressAsyncHandler(
  async (req, res, next) => {
    try {
      const username = String(req.body.username)
      const salt = await genSalt(10)
      const hash = await hashPwd(String(req.body.password), salt)

      await createNewUser({ username, hash })

      res.redirect('/')
    } catch (err) {
      return next(err)
    }
  }
)
