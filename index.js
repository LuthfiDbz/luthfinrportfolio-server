import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import PortfolioRoute from './routes/PortfolioRoute.js';
import 'dotenv/config'

const app = express();
mongoose.connect('mongodb+srv://luthfidbz:FQd2iyRX40tJuVXL@luthfidb.x4sdo.mongodb.net/personalwebsite?retryWrites=true&w=majority')

const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log('Database connected..'));

app.use (cors());
app.use(express.json()); 
app.use(PortfolioRoute)

app.listen(process.env.PORT || 5000, () => console.log('Server up and running...'));