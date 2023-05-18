import { Router } from 'express';
import { BadRequestException, NotFoundException } from '~/utils/exceptions';
import {v4 as uuidv4} from 'uuid'; 

const db = require('../../config/database');

const DishesController = Router()


// CREATE : création des plats en BDD à partir du pannel admin

DishesController.post('/control-panel', async function(req,res) {
    console.log(req.body);
    const { plateName, price, categoryId } = req.body;
    let catID;

    switch (categoryId) {
        case 'entree':
            catID = '647a6da6-09b4-4182-8206-81232e27fee9'; 
            break;
        case 'dish':
            catID = '38ca1758-01b4-4589-bbf6-6bfc852bad29'; 
            break;
        case 'dessert':
            catID = '4e429783-8ea0-4571-b966-df141dc96e48'; 
            break;
        default:
            catID = '647a6da6-09b4-4182-8206-81232e27fee9'; 
    }

    const dishExist = await db.query('SELECT title from dishes WHERE title = ?', [plateName]);
   
    if (dishExist.length > 0) {
        throw new BadRequestException('This dish already exist')  
    } 
    
  
    const resultInsert = await db.query('INSERT INTO dishes (id, title, price,category_id) VALUES (?, ?, ?, ?)', [ `${uuidv4()}`, plateName, price, catID ])
    return res.status(201).json()
})




// READ : Récupération des plats pour les mettre dans la carte

DishesController.get('/dishes', async function(req,res) {
        
    // const dishResult = await db.query('SELECT * FROM dishes LIMIT 100');
    // console.log(dishResult)

    // return res.status(200).json(dishResult)

    const idEntree = '647a6da6-09b4-4182-8206-81232e27fee9';
    const idDish = '38ca1758-01b4-4589-bbf6-6bfc852bad29';
    const idDessert = '4e429783-8ea0-4571-b966-df141dc96e48';

    const entreeResult = await db.query('SELECT * FROM dishes WHERE category_id = ? ', [idEntree]);
    const dishResult = await db.query('SELECT * FROM dishes WHERE category_id = ? ', [idDish]);
    const dessertResult = await db.query('SELECT * FROM dishes WHERE category_id = ? ', [idDessert]);

    console.log(entreeResult);
    console.log(dishResult);
    console.log(dessertResult);

    const mealResult = {
        entree: entreeResult,
        dish: dishResult,
        dessert: dessertResult
    }

    console.log(mealResult)

    return res.status(200).json(mealResult);
})



// UPDATE : Mise à jour des plats en BDD depuis le pannel admin

DishesController.patch('/control-panel', async function(req,res) {
    console.log(req.body);
    const { id, title, price } = req.body;

    // const dishTitleExist = await db.query('SELECT title from dishes WHERE title = ?', [title]);
   
    const updateRow = await db.query('UPDATE dishes SET title = ?, price = ? WHERE id = ?', [title , price , id])
  
    return res.status(200).json()
})


// DELETE : Suppresion des plats en BDD depuis le pannel admin

DishesController.delete('/control-panel', async function(req,res) {
    
    const { id } = req.query;
    
  
    const deleteRow = await db.query('DELETE from dishes WHERE id = ?', [id])
    return res.status(200).json()
})
 

export { DishesController }