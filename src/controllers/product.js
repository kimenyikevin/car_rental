//product controller

'use strict';

import model from '../database/models';

const Product = model.Product;

export const createProduct = async (req, res) => {
  try {
    console.log(req.body)
    const product = await Product.create(req.body);
    return res.status(201).json({
      product,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    return res.status(200).json({ products });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({
      where: { productid: id },
    });
    if (product) {
      return res.status(200).json({ product });
    }
    return res
      .status(404)
      .send('Product with the specified ID does not exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Product.update(req.body, {
      where: { productid: id },
    });
    if (updated) {
      const updatedProduct = await Product.findOne({
        where: { productid: id },
      });
      return res.status(200).json({ product: updatedProduct });
    }
    throw new Error('Product not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Product.destroy({
      where: { productid: id },
    });
    if (deleted) {
      return res.status(204).send('Product deleted');
    }
    throw new Error('Product not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//get all products by category
export const getAllProductsByCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findAll({
      where: { categoryid: id },
    });
    if (products) {
      return res.status(200).json({ products });
    }
    return res
      .status(404)
      .send('Product with the specified ID does not exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
