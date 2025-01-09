const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(400).json({ message: 'No estas autorizado' });
    }
    const parsedToken = token.replace('Bearer ', '');
    const { id } = verifyjwt(parsedToken);
    const user = await User.findByPk(id);
    user.password = null;
    req.user = user;
    next();
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { isAuth };
