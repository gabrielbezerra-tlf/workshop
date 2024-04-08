const express = require('express');
const connectDb = require('../infra/db');
const carRoutes = require('./routes/car.routes');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

connectDb();

app.use(express.json());

app.use('/api/cars', carRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
