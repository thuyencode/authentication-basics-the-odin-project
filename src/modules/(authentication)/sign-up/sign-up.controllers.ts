import expressAsyncHandler from 'express-async-handler'
import { createNewUser } from './sign-up-services'

export const showSignUpPage = expressAsyncHandler(async (req, res) => {
  res.render('sign-up')
})

export const handleSignUpPostRequest = expressAsyncHandler(
  async (req, res, next) => {
    try {
      await createNewUser({
        username: req.body.username,
        password: req.body.password
      })

      res.redirect('/')
    } catch (err) {
      return next(err)
    }
  }
)
