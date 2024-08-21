const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../'));
;})

router.get('*', (req, res) => {
    rmSync.sendFile(path.join(__dirname, './'));
});

module.exports = router;