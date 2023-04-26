import { Router } from 'express';
import session from 'express-session';
import { PetsService } from '~/resources/pets/pets.service';
import { BadRequestException, NotFoundException } from '~/utils/exceptions';
import {v4 as uuidv4} from 'uuid'; 
import bcrypt from 'bcryptjs';

const db = require('../../config/database');

/**
 * Nous créeons un `Router` Express, il nous permet de créer des routes en dehors du fichier `src/index.ts`
 */
const UserController = Router()


// /**
//  * Instance de notre service
//  */
// const service = new PetsService()

// /**
//  * Trouve tous les animaux
//  */
// UserController.get('/', (req, res) => {
//   return res
//     .status(200)
//     .json(service.findAll())
// })

// /**
//  * Trouve un animal en particulier
//  */
// UserController.get('/:id', (req, res) => {
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
// UserController.post('/', (req, res) => {
//   const createdPet = service.create(req.body)

//   return res
//     .status(201)
//     .json(createdPet)
// })

// /**
//  * Mise à jour d'un animal
//  */
// UserController.patch('/:id', (req, res) => {
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
// UserController.delete('/:id', (req, res) => {
//   const id = Number(req.params.id)

//   if (!Number.isInteger(id)) {
//     throw new BadRequestException('ID invalide')
//   }

//   return res
//     .status(200)
//     .json(service.delete(id))
// })



// UserController.post('/register', async function(req,res) {
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



UserController.post('/register', async function(req,res) {
    console.log(req.body);
    const { firstName, lastName, email, password } = req.body;
    const result = await db.query('SELECT email from users WHERE email = ?', [email]) ;
   
    if (result.length > 0) {
        throw new BadRequestException('The email is already in use')  
    } 
  
    const resultInsert = await db.query('INSERT INTO users (id, first_name, last_name, email, password) VALUES (?, ?, ?, ?, ?)', [ `${uuidv4()}`, firstName, lastName, email, password ])
    return res.status(201).json()
})




UserController.post('/login', async function(req,res) {
    console.log(req.body);
    const { email, password } = req.body;
    
    const emailResult = await db.query('SELECT * FROM users WHERE email = ? ', [email]);
    console.log(emailResult)

    const isSamePassword = await bcrypt.compare(password, emailResult[0].password)
    console.log(isSamePassword)

    if (emailResult.length === 0) {
        return res.status(400).json('Unknown user')         
    } else if (!isSamePassword) {
        return res.status(400).json('Unknown user') 
    } else {
        const { password, ...restUserData } = emailResult[0]
        console.log(restUserData);
        return res.status(200).json(restUserData)
    }
})


/**
 * On expose notre controller pour l'utiliser dans `src/index.ts`
 */
export { UserController }