const jwt = require('jsonwebtoken');
// crear token
const generateSing = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// comprobar si ese token fue creada por nosotros
const verifyjwt = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { generateSing, verifyjwt };
