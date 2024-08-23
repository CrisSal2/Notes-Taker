// Package Imports
const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Routes Imports
const notesRoute = require('./routes/notes');
const homeRoute = require('./routes/home');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


/******************************************************** Page Routes *******************************************************/


app.use('/api/notes', notesRoute);

app.use('/', homeRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});