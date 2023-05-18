import cors from 'cors'
import express from 'express'
import { config } from '~/config'
import { UserController } from '~/resources/controllers/user.controller'
import { DishesController } from '~/resources/controllers/dishes.controller'
import { BookingController } from '~/resources/controllers/booking.controller'
import { ExceptionsHandler } from '~/middlewares/exceptions.handler'
import { UnknownRoutesHandler } from '~/middlewares/unknownRoutes.handler'

// Initialise le serveur
const app = express()  

app.use(express.json()) 

app.use(cors())


// Toutes les routes CRUD pour les utilisateurs seronts préfixées par `/users`

app.use('/users', UserController)


// Toutes les routes CRUD pour les plats seronts préfixées par `/menus`

app.use('/menus', DishesController)


// Toutes les routes CRUD pour les réservations seronts préfixées par `/menus`

app.use('/slots', BookingController)


app.get('/', (req, res) => res.send('🏠'))


app.all('*', UnknownRoutesHandler)


// Gestion des erreurs
 
app.use(ExceptionsHandler)


app.listen(config.API_PORT, () => console.log('Silence, ça tourne.'))