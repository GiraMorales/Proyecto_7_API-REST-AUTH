const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(400).json({ message: 'No estas autorizado' });
    }
    const parsedToken = token.replace('Bearer ', '');
    const { id } = verifyjwt(parsedToken);
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }
    user.password = null;
    req.user = user;
    next();
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error en la verificación del token', error });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(400).json({ message: 'No estás autorizado' });
    }

    const parsedToken = token.replace('Bearer ', '');
    const { id } = verifyjwt(parsedToken);
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }
    if (user.rol !== 'admin') {
      return res.status(400).json({
        message: 'Esta acción sólo la pueden realizar los administradores'
      });
    }
    user.password = null;
    req.user = user;
    next();
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error en la verificación del token o rol', error });
  }
};

module.exports = { isAuth, isAdmin };
