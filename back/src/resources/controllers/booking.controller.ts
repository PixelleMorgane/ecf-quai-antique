import { Router } from 'express';
import { BadRequestException, NotFoundException } from '~/utils/exceptions';
import {v4 as uuidv4} from 'uuid'; 

const db = require('../../config/database');

const BookingController = Router()

// CREATE : création d'une réservation

BookingController.post('/booking', async function(req,res) {
    console.log(req.body);
    const { nbPersons, date, hours, phone, firstName, lastName } = req.body;
    const dateInsert = `${date} ${hours}`
    let dayMoment;

    if(
        hours === '12:00' || 
        hours === '12:15' || 
        hours === '12:30' || 
        hours === '12:45' || 
        hours === '13:00' || 
        hours === '13:15' || 
        hours === '13:30' || 
        hours === '13:45' || 
        hours === '14:00'
    ) {
        dayMoment = 'midi';
    } else {
        dayMoment = 'soir';
    }

    const minSlot = `${date} ${dayMoment === 'midi' ? '12:00' : '19:00' }`;
    const maxSlot = `${date} ${dayMoment === 'midi' ? '14:00' : '22:00' }`;
    const nbPersonsCount = await db.query('SELECT SUM (nb_persons) from bookings WHERE date >= ? AND date <= ?', [minSlot, maxSlot]);
    const restaurantCapacity = await db.query('SELECT * from restaurant');
    const myBooking = parseInt(nbPersonsCount[0]['SUM (nb_persons)'], 10) + nbPersons;

    if( myBooking > restaurantCapacity[0].nb_persons_max) {
        throw new BadRequestException('La capacité du restaurant est dépassé')
    }
  
    const resultInsert = await db.query(
        "INSERT INTO bookings (id, nb_persons, date, phone, first_name, last_name, day_moment) VALUES (?, ?, ?, ?, ?, ?, ?)", 
        [ `${uuidv4()}`, nbPersons, dateInsert, phone, firstName, lastName, dayMoment ]
    )
    return res.status(201).json()
})


// READ : Lire les réservation et la capacité du restaurant

BookingController.get('/control-pannel', async function(req,res) {
    

    const bookingResult = await db.query('SELECT * FROM bookings');


    return res.status(200).json(bookingResult);
})

BookingController.get('/booking', async function(req,res) {
    

    const restaurantCapacity = await db.query('SELECT * from restaurant');


    return res.status(200).json(restaurantCapacity[0].nb_persons_max);
})



// UPDATE : Mise à jour de la capacité max du restaurant

BookingController.patch('/control-panel', async function(req,res) {
    console.log(req.body);
    const { nbPersonsMax} = req.body;
   
    const updateRow = await db.query('UPDATE restaurant SET nb_persons_max = ?', [nbPersonsMax])
  
    return res.status(200).json()
})



export { BookingController }