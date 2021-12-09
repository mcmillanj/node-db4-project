
exports.seed = function(knex,promise) {
  
     return knex('ingredients_quantity').insert([
        { quantity: 2, ingredient_id: 1, step_id: 1 },
        { quantity: 2, ingredient_id: 2, step_id: 1 },
        { quantity: 1, ingredient_id: 3, step_id: 3 },
        { quantity: 1, ingredient_id: 4, step_id: 6 },
        { quantity: 1, ingredient_id: 5, step_id: 7 },
        { quantity: 2, ingredient_id: 6, step_id: 8 },
        { quantity: 1, ingredient_id: 7, step_id: 6 },
        { quantity: 2, ingredient_id: 8, step_id: 1 },
        { quantity: 1, ingredient_id: 9, step_id: 2 },
    ])
  }  

