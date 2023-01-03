import jwt from 'jsonwebtoken';

require('dotenv').config();

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.token = token;
    req.user = user;
    return next();
  } catch (e) {
    return res.status(401).send({ error: req.t('auth_error') });
  }
};

export default auth;
