import expressAsyncHandler from "express-async-handler";

export const showHomePage = expressAsyncHandler(async (req, res) => {
  res.render("index");
});
