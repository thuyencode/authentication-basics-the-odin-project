import expressAsyncHandler from 'express-async-handler'

export const showSignInPage = expressAsyncHandler(async (req, res) => {
  res.render('sign-in')
})
