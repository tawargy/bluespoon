const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.param("id", userController.checkID);
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUser);
router.post("/users", userController.addUser);
router.patch("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
