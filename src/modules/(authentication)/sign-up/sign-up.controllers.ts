import { hashPassword } from '@/libs/utils'
import expressAsyncHandler from 'express-async-handler'
import { createNewUser } from './sign-up-services'

export const showSignUpPage = expressAsyncHandler(async (req, res) => {
  res.render('sign-up')
})

export const handleSignUpRequest = expressAsyncHandler(
  async (req, res, next) => {
    try {
      await createNewUser({
        username: req.body.username,
        hashedPassword: await hashPassword(req.body.password)
      })

      res.redirect('/')
    } catch (err) {
      return next(err)
    }
  }
)
