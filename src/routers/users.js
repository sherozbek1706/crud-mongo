const {
  addUsers,
  getUsers,
  getUsersByID,
  updateUsers,
  deleteUsers,
} = require("../controllers/users");

const router = require("express").Router();

router.post("/users", addUsers);
router.get("/users", getUsers);
router.get("/users/:id", getUsersByID);
router.put("/users/:id", updateUsers);
router.delete("/users/:id", deleteUsers);

module.exports = router;
