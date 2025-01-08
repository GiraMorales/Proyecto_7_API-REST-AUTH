const register = async (req, res, netx) => {
  try {
    console.log('se ejecuta');

    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { register };
