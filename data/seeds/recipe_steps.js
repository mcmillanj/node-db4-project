
exports.seed = function (knex,promise) {
  return knex('recipe_steps').insert([
    {
      step_num: 1,
      step_instructions: 'scramble the eggs with cheese',
      recipe_id: 1,
    },
    {
      step_num: 2,
      step_instructions: 'toast a roll with butter',
      recipe_id: 1,
    },
    {
      step_num: 3,
      step_instructions: 'add pepper to eggs and cheese ',
      recipe_id: 1,
    },
    {
      step_num: 4,
      step_instructions: 'toast the tailor ham to a light seier',
      recipe_id: 1,
    },
    {
      step_num: 5,
      step_instructions: 'put between the tated bun and enjoy',
      recipe_id: 1,
    },
    {
      step_num: 1,
      step_instructions: 'boil water with pasta in it for 11 minutes.',
      recipe_id: 2,
    },
    {
      step_num: 2,
      step_instructions: 'stir,add onins and peppers and let marinate for a few minutes',
      recipe_id: 2,
    },
    {
      step_num: 3,
      step_instructions: 'add meat sauce with spices stir vigorously and serve',
      recipe_id: 2,
      
    },
  ])
}  
