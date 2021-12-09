
exports.seed = function(knex,promise) {
       
        return knex('recipes').insert([
          { recipe_name: 'Tailor egg ham and cheese' },
          { recipe_name: 'Spaghetti Bolognese' },
        ])
      }  
