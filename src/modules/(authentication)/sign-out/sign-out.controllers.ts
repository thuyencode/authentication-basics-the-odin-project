import expressAsyncHandler from 'express-async-handler'

export const signOut = expressAsyncHandler(async (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err)
    }

    res.redirect('/')
  })
})
