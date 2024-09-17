const knex = require('knex')
const config = require('../knexfile')

 const db = knex(config.development)





 async function getRecipesById(recipe_id) {

  const rows = await db('recipes as r')
    .leftJoin('steps as st', 'st.recipe_id', 'r.recipe_id')  

    .leftJoin('step_ingredient_quantity as siq', 'siq.step_id', 'st.step_id')

    .leftJoin('ingredients as in', 'in.ingredient_id', 'siq.ingredient_id')

    .where('r.recipe_id', recipe_id)

    const result = {
        recipe_id: rows[0].recipe_id,
        recipe_name: rows[0].recipe_name,
        created_at: rows[0].post_time,
        steps:[]
    }
    rows.forEach(row => {
        if(row.step_id){
            rest.steps.push({
                step_id: row.step_id,
                step_number: row.step_number,
                step_instructions: row.step_instructions,
                ingredients: []
            })
        }
    })
    result.steps.forEach(row => {
        if(row.ingredient_id){
            rest.steps.ingredients.push({
                ingredient_id: row.ingredient_id,
                ingredient_name: row.ingredient_name,
                quantity: row.quantity
            })
        }
    })
    return result
       
  }

  


module.exports = {
  getRecipesById,
}  