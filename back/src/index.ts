import cors from 'cors'
import express from 'express'
import { config } from '~/config'
import { UserController } from '~/resources/pets/user.controller'
import { DishesController } from '~/resources/pets/dishes.controller'
import { BookingController } from '~/resources/pets/booking.controller'
import { ExceptionsHandler } from '~/middlewares/exceptions.handler'
import { UnknownRoutesHandler } from '~/middlewares/unknownRoutes.handler'

/**
 * On créé une nouvelle "application" express
 */
const app = express()  // Initialise le serveur

/**
 * On dit à Express que l'on souhaite parser le body des requêtes en JSON
 *
 * @example app.post('/', (req) => req.body.prop)
 */
app.use(express.json()) 

/**
 * On dit à Express que l'on souhaite autoriser tous les noms de domaines
 * à faire des requêtes sur notre API.
 */
app.use(cors())

/**
 * Toutes les routes CRUD pour les utilisateurs seronts préfixées par `/users`
 */
app.use('/users', UserController)

/**
 * Toutes les routes CRUD pour les plats seronts préfixées par `/menus`
 */
app.use('/menus', DishesController)

/**
 * Toutes les routes CRUD pour les réservations seronts préfixées par `/menus`
 */
app.use('/slots', BookingController)

/**
 * Homepage (uniquement necessaire pour cette demo)
 */
app.get('/', (req, res) => res.send('🏠'))

/**
 * Pour toutes les autres routes non définies, on retourne une erreur
 */
app.all('*', UnknownRoutesHandler)

/**
 * Gestion des erreurs
 * /!\ Cela doit être le dernier `app.use`
 */
app.use(ExceptionsHandler)

/**
 * On demande à Express d'ecouter les requêtes sur le port défini dans la config
 */
app.listen(config.API_PORT, () => console.log('Silence, ça tourne.'))