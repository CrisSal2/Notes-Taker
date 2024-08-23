const express = require('express');
const path = require('path');
const router = express.Router();


// Gets notes.html file.
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Gets index.html file.
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;