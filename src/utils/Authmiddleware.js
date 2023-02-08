import model from '../database/models';
import jwt from 'jsonwebtoken';

const User = model.User;

const Auth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await await User.findOne({
        where: {
          uuid: decoded.uuid,
        },
      });
      next();
    } catch (error) {
      console.log(error);
      res.status(401).send({
        message: 'Not authorized , token Failed',
      });
    }
  } else if (!token) {
    res.status(401).send({
      message: 'Not authorized, no token',
    });
  }
};

const admin = (req, res, next) => {
  if (
    (req.user && req.user.roleName === 'admin') ||
    req.user.roleName === 'developer'
  ) {
    next();
  } else {
    res.status(401).send({
      message: 'Not Authorized for the Route',
    });
  }
};
export { Auth, admin };
