
exports.seed = function (knex) {
  return knex('step_ingredients').insert([
    { ingredient_name: 'Bread' },
    { ingredient_name: 'ham' },
    { ingredient_name: 'Cheese' },
    { ingredient_name: 'egg' },
    { ingredient_name: 'spegetti' },
    { ingredient_name: 'meat sauce' },
    { ingredient_name: 'onions' },
    { ingredient_name: 'peppers' },
     ])
}  
