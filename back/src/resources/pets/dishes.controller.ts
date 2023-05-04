import { Router } from 'express';
import session from 'express-session';
import { PetsService } from '~/resources/pets/pets.service';
import { BadRequestException, NotFoundException } from '~/utils/exceptions';
import {v4 as uuidv4} from 'uuid'; 
import bcrypt from 'bcryptjs';

const db = require('../../config/database');
// const bcrypt = require('bcrypt');

/**
 * Nous créeons un `Router` Express, il nous permet de créer des routes en dehors du fichier `src/index.ts`
 */
const DishesController = Router()


// /**
//  * Instance de notre service
//  */
// const service = new PetsService()

// /**
//  * Trouve tous les animaux
//  */
// DishesController.get('/', (req, res) => {
//   return res
//     .status(200)
//     .json(service.findAll())
// })

// /**
//  * Trouve un animal en particulier
//  */
// DishesController.get('/:id', (req, res) => {
//   const id = Number(req.params.id)

//   if (!Number.isInteger(id)) {
//     throw new BadRequestException('ID non valide')
//   }

//   const pet = service.findOne(id)

//   if (!pet) {
//     throw new NotFoundException('Animal introuvable')
//   }

//   return res
//     .status(200)
//     .json(pet)
// })

// /**
//  * Créé un animal
//  */
// DishesController.post('/', (req, res) => {
//   const createdPet = service.create(req.body)

//   return res
//     .status(201)
//     .json(createdPet)
// })

// /**
//  * Mise à jour d'un animal
//  */
// DishesController.patch('/:id', (req, res) => {
//   const id = Number(req.params.id)

//   if (!Number.isInteger(id)) {
//     throw new BadRequestException('ID invalide')
//   }

//   const updatedPet = service.update(req.body, id)

//   return res
//     .status(200)
//     .json(updatedPet)
// })

// /**
//  * Suppression d'un animal
//  */
// DishesController.delete('/:id', (req, res) => {
//   const id = Number(req.params.id)

//   if (!Number.isInteger(id)) {
//     throw new BadRequestException('ID invalide')
//   }

//   return res
//     .status(200)
//     .json(service.delete(id))
// })



// DishesController.post('/register', async function(req,res) {
//   try {
//       // const {email, password} = req.body;

//       const email = 'test@test.fr'
//       const password = 'pa$$word'
      
//       const encryptedPassword = await bcrypt.hash(password,10)

//       const sqlQuery = 'INSERT INTO user (email, password) VALUES (?,?)';
//       const result = await db.query(sqlQuery, [email, encryptedPassword]);

//       res.status(200).json(result);//.json({userId: result.insertId});
//   } catch (error: any) {
//       res.status(400).send(error.message)
//   }
// })



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
 

/**
 * On expose notre controller pour l'utiliser dans `src/index.ts`
 */
export { DishesController }