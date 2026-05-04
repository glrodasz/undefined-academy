import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import { productRouter } from './products/router.js';


const { PORT, MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME} = process.env;
const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/?retryWrites=true&w=majority`;


const app = express();

// Global Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
app.get('/', (req, res)=> res.send('Hola mundo'));
app.use('/products', productRouter);

app.listen(PORT, ()=>{
  console.log(`🌍 Server en funcionamiento en el puerto ${PORT}: http://localhost:${PORT}/`);
  mongoose.connect(MONGO_URI, {
    dbName: "sample_data",
  });
})