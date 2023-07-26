import bcrypt from 'bcryptjs';
import model from '../database/models';

import jwt from 'jsonwebtoken';

const User = model.User;

const signToken = (uuid) => {
  return jwt.sign({ uuid }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const signup = async (req, res, next) => {
  try {
    const { firstName, lastName, phone } = req.body;

    if (!firstName || !lastName || !phone) {
      return res.status(400).json({
        status: 'fail',
        message: 'Invalid request, Provide valid information',
      });
    }

    const user = await User.findOne({ where: { phone } });

    if (user) {
      return res.status(403).json({
        status: 'fail',
        message: 'User already exist',
      });
    }

    const newUser = await User.create({
      firstName,
      lastName,
      phone
    });

    res.status(201).json({
      status: 'success',
      data: {
        users: newUser,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Error while creating a user',
      err: error.message,
    });
  }
};

export const signIn = async (req, res, next) => {
  try {
    /**
     * Get user email and password
     */
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        status: 'fail',
        message: 'Invalid data supplied',
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({
        status: 'fail',
        message: 'User is not  registered',
      });
    }
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(403).json({
        status: 'fail',
        message: 'Invalid email or password',
      });
    }

    const Token = signToken(user.uuid);

    if (!user.dataValues.delinquent) {
      //populate user role from roleid
      // const role = await model.Role.findOne({
      //   where: { roleId: user.roleId },
      // });
      res.status(200).json({
        status: 'success',
        message: 'Logged In successfully!!',
        token: Token,
        data: {
          user,
        },
      });
    } else {
      res.status(403).json({
        status: 'fail',
        message:
          'Please pay or renew subscription to be eligible for our services, check your email for more information',
        token: Token,
        data: {
          user,
        },
      });
    }
  } catch (error) {
    res.status(403).json({
      status: 'fail',
      message: 'Error while signin user',
      err: error.message,
    });
  }
};
