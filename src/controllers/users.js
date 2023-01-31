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

//update a user
export const updateUser = async (req, res) => {
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
    //check if the user email is already in the database

    const emailExist = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (emailExist) {
      return res.status(400).json({
        status: 'error',
        error: 'Email already exists',
      });
    }
    const updatedUser = await user.update(req.body);
    res.status(200).json({
      status: 'success',
      updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      error: error.message,
    });
  }
};

// delete a user
export const deleteUser = async (req, res) => {
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
    await user.destroy();
    res.status(200).json({
      status: 'success',
      message: 'User deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      error: error.message,
    });
  }
};
