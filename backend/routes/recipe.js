const express = require("express");
const recipeController = require("../controllers/recipeController");

const router = express.Router();

router.param("id", recipeController.checkID);
router.get("/", recipeController.getAllRecipe);

router.get("/recipes/:id", recipeController.getRecipe);
router.post("/recipes", recipeController.postRecipe);
router.patch("/recipes/:id", recipeController.updateRecipe);
router.delete("recipes/:id", recipeController.deleteRecipe);

module.exports = router;
