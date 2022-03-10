const express = require('express');
const recipes = require('./recipes');
const deleteRecipe = require('./deleteData');
const getChefs = require('./chefs');
const errors = require('./errors');

const router = express.Router();

router.get('/recipes', recipes.getRecipes);
router.post('/create-recipe', recipes.addRecipes);
router.delete('/delete-recipe/:id', deleteRecipe);
router.get('/chefs', getChefs);
router.use(errors.error404);
router.use(errors.error500);

module.exports = router;
