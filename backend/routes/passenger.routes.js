import express from 'express'
import { createPassenger, loginPassenger } from '../controllers/passengerController.js'

const router = express.Router()

router.post('/register/passengers', createPassenger)
router.post('/login/passenger', loginPassenger)

export default router;