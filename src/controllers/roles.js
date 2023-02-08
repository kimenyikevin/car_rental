import model from '../database/models';

const Role = model.Role;

export const createRole = async (req, res) => {
  try {
    const { roleName, description } = req.body;

    if (!roleName || !description) {
      return res.status(400).json({
        status: 'fail',
        message: 'Invalid request, Provide valid information',
      });
    }

    const role = await Role.findOne({ where: { roleName } });

    if (role) {
      return res.status(403).json({
        status: 'fail',
        message: 'Role already exist',
      });
    }

    const newRole = await Role.create({
      roleName,
      description,
    });

    res.status(201).json({
      status: 'success',
      data: {
        role: newRole,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Error while creating a Role',
      err: error.message,
    });
  }
};

export const getAllRoles = async (req, res) => {
  try {
    const Roles = await Role.findAll();

    res.status(200).json({
      status: 'success',
      data: {
        Roles,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Error while fetching Roles',
      err: error.message,
    });
  }
};

export const getRole = async (req, res) => {
  try {
    const { roleId } = req.params;
    const role = await Role.findOne({ where: { roleId } });

    if (!role) {
      return res.status(404).json({
        status: 'fail',
        message: 'Role not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        role,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Error while fetching Role',
      err: error.message,
    });
  }
};

export const updateRole = async (req, res) => {
  try {
    const { roleId } = req.params;
    const { roleName, description } = req.body;

    const role = await Role.findOne({ where: { roleId } });

    if (!role) {
      return res.status(404).json({
        status: 'fail',
        message: 'Role not found',
      });
    }

    const updatedRole = await Role.update(
      {
        roleName: roleName || Role.roleName,
        description: description || Role.description,
      },
      {
        where: { roleId },
        returning: true,
        plain: true,
      },
    );

    res.status(200).json({
      status: 'success',
      data: {
        Role: updatedRole[1],
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Error while updating Role',
      err: error.message,
    });
  }
};

export const deleteRole = async (req, res, next) => {
  try {
    const { roleId } = req.params;

    const role = await Role.findOne({ where: { roleId } });

    if (!role) {
      return res.status(404).json({
        status: 'fail',
        message: 'Role not found',
      });
    }

    await role.destroy({
      where: { roleId },
    });

    res.status(200).json({
      status: 'success',
      message: 'Role deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Error while deleting Role',
      err: error.message,
    });
  }
};
