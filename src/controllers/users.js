import bcrypt from 'bcryptjs';
import model from '../database/models';

import jwt from 'jsonwebtoken';

const User = model.User;

// get all  users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({
      status: 'success',
      users,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      error: error.message,
    });
  }
};

// get a single user
export const getSingleUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        uuid: req.params.uuid,
      },
    });
    if (!user) {
      return res.status(404).json({
        status: 'error',
        error: 'User not found',
      });
    }
    res.status(200).json({
      status: 'success',
      user,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      error: error.message,
    });
  }
};
