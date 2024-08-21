const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

/* const readNotes = (filePath) => { new Promise((resolve, reject) =>
      fs.readFile(filePath, 'utf8', (err, data) => (
        err ? reject(err) : resolve(data)
    )))
}; */

/* router.get('/', async(req, res) => {

    try {
        const data = await 
    }

}) */

module.exports = router;