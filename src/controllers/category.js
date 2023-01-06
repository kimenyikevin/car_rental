import model from '../database/models';

const Category = model.Category;

export const createCategory = async (req, res, next) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({
        status: 'fail',
        message: 'Invalid request, Provide valid information',
      });
    }

    const category = await Category.findOne({ where: { name } });

    if (category) {
      return res.status(403).json({
        status: 'fail',
        message: 'Category already exist',
      });
    }

    const newCategory = await Category.create({
      name,
      description,
    });

    res.status(201).json({
      status: 'success',
      data: {
        category: newCategory,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Error while creating a category',
      err: error.message,
    });
  }
};

export const getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.findAll();

    res.status(200).json({
      status: 'success',
      data: {
        categories,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Error while fetching categories',
      err: error.message,
    });
  }
};

export const getCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await Category.findOne({ where: { id } });

    if (!category) {
      return res.status(404).json({
        status: 'fail',
        message: 'Category not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        category,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Error while fetching category',
      err: error.message,
    });
  }
};

export const updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const category = await Category.findOne({ where: { id } });

    if (!category) {
      return res.status(404).json({
        status: 'fail',
        message: 'Category not found',
      });
    }

    const updatedCategory = await Category.update(
      {
        name: name || category.name,
        description: description || category.description,
      },
      {
        where: { id },
        returning: true,
        plain: true,
      },
    );

    res.status(200).json({
      status: 'success',
      data: {
        category: updatedCategory[1],
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Error while updating category',
      err: error.message,
    });
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    const category = await Category.findOne({ where: { id } });

    if (!category) {
      return res.status(404).json({
        status: 'fail',
        message: 'Category not found',
      });
    }

    await Category.destroy({
      where: { id },
    });

    res.status(200).json({
      status: 'success',
      message: 'Category deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Error while deleting category',
      err: error.message,
    });
  }
};
