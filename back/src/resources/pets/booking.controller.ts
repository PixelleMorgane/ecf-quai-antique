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
const BookingController = Router()


// /**
//  * Instance de notre service
//  */
// const service = new PetsService()

// /**
//  * Trouve tous les animaux
//  */
// BookingController.get('/', (req, res) => {
//   return res
//     .status(200)
//     .json(service.findAll())
// })

// /**
//  * Trouve un animal en particulier
//  */
// BookingController.get('/:id', (req, res) => {
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
// BookingController.post('/', (req, res) => {
//   const createdPet = service.create(req.body)

//   return res
//     .status(201)
//     .json(createdPet)
// })

// /**
//  * Mise à jour d'un animal
//  */
// BookingController.patch('/:id', (req, res) => {
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
// BookingController.delete('/:id', (req, res) => {
//   const id = Number(req.params.id)

//   if (!Number.isInteger(id)) {
//     throw new BadRequestException('ID invalide')
//   }

//   return res
//     .status(200)
//     .json(service.delete(id))
// })



// BookingController.post('/register', async function(req,res) {
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





BookingController.post('/booking', async function(req,res) {
    console.log(req.body);
    const { nbPersons, date, hours, phone, firstName, lastName } = req.body;
    const dateInsert = `${date} ${hours}`
  
    const resultInsert = await db.query(
        "INSERT INTO bookings (id, nb_persons, date, phone, first_name, last_name) VALUES (?, ?, ?, ?, ?, ?)", 
        [ `${uuidv4()}`, nbPersons, `${dateInsert}`, phone, firstName, lastName ]
    )
    return res.status(201).json()
})



BookingController.get('/control-pannel', async function(req,res) {
    

    const bookingResult = await db.query('SELECT * FROM bookings');


    return res.status(200).json(bookingResult);
})



/**
 * On expose notre controller pour l'utiliser dans `src/index.ts`
 */
export { BookingController }