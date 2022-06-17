import express from 'express'
import {getClient, getPortfolio} from '../controller/PortfolioController.js'

const router = express.Router();
router.get('/portfolio', getPortfolio)
router.get('/client', getClient)

export default router