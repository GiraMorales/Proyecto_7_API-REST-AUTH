const register = async (req, res, next) => {
  try {
    console.log('se ejecuta');
    const newUser = new User({
      userName: req.body.userName,
      password: req.body.password
    });

    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { register };
