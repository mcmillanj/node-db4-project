const express = require('express');
const helpers = require('./model');
const router = express.Router();
const { getRecipesById } = require('./model.js');



router.get('/reipes/:id', (req, res, next) => {
    getRecipesById(req.params.id)
        .then((resipes) => {
            res.json(recipes)
        })
        .catch(next())
})
module.exports = router; 