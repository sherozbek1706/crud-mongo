const express = require("express");
const Users = require("../schema/Users");
const bctrypt = require("bcrypt");
/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const addUsers = async (req, res) => {
  try {
    const { ...data } = req.body;

    const hashedPassword = bctrypt.hashSync(data.password, 10);

    const user = await Users.create({ ...data, password: hashedPassword });

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await Users.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error });
  }
};

const getUsersByID = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await Users.findById(id);

    if (!user) {
      return res.json({ msg: "User not defined!" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error });
  }
};

const updateUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const { ...changes } = req.body;

    const user = await Users.findById(id);

    if (!user) {
      return res.json({ msg: "User not defined!" });
    }

    const updatedUser = await Users.findByIdAndUpdate(id, changes);

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(404).json({ error });
  }
};

const deleteUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findById(id);

    if (!user) {
      return res.json({ msg: "User not defined!" });
    }

    const deleteUser = await Users.findByIdAndDelete(id);

    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(404).json({ error });
  }
};

module.exports = {
  addUsers,
  getUsers,
  getUsersByID,
  updateUsers,
  deleteUsers,
};
