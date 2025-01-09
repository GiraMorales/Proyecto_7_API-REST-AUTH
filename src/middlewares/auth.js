const isAuth = async (req, res, next) => {
  try {
    console.log(req.headers.authorization);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { isAuth };
