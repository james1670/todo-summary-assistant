const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const todoRoutes = require('./routes/todoRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', todoRoutes);

module.exports = app;
