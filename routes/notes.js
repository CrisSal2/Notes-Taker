const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');



const writeToFile = (filePath, content) =>
    new Promise((resolve, reject) =>
      fs.writeFile(filePath, JSON.stringify(content, null, 4), (err) =>
        err ? reject(err) : resolve()
      )
    );


const readNotes = (filePath) => { new Promise((resolve, reject) =>
      fs.readFile(filePath, 'utf8', (err, data) => (
        err ? reject(err) : resolve(data)
    )))
};






router.get('/', async(req, res) => {

    try {
        const data = await readNotes(path.join(__dirname, '../db/db.json'));
        res.json(JSON.parse(data));
    } catch (err) {
        res.status(500).json({err: 'Could not get notes!'});
    }
});








router.post('/', async (req, res) => {

    try {
        const { title, text } = req.body;
        const Note = { id: uuidv4(), title, text };
        const data = await readNotes(path.join(__dirname, '../db/db.json'));
        const notes = JSON.parse(data);
        
        notes.push(Note);
    } catch {
        res.status(500).json({err: 'Could not save note!'});
    }
});





router.delete('/:id', async (req, res) => {

    try {
        const noteID = req.params.id;
        const data = await readFromFile(path.join(__dirname, '../db/db.json'));
        const notes = JSON.parse(data);
        const updateNotes = notes.filter((note) => note.id !== noteID);

        await writeToFile(path.join(__dirname, '../db/db.json'), updateNotes);
        res.json({ message: 'Note deleted successfully.' });
    } catch (err) {
        res.status(500).json({ err: 'Could not delete note!' });
    }
});





module.exports = router;