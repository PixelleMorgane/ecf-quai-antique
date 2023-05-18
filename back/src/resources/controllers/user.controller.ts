import { Router } from 'express';
import { BadRequestException, NotFoundException } from '~/utils/exceptions';
import {v4 as uuidv4} from 'uuid'; 
import bcrypt from 'bcryptjs';

const db = require('../../config/database');

const UserController = Router()


// CREATE : création d'un nouvel utilisateur

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


// READ : connexion à son espace utilisateur

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



export { UserController }