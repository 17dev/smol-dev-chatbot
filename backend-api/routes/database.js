const express = require('express');
const router = express.Router();
const Database = require('../models/database');

// Setup Database
router.post('/setup', async (req, res) => {
    try {
        const { databaseType, tableName } = req.body;
        const newDatabase = new Database({ databaseType, tableName });
        const database = await newDatabase.save();
        res.status(200).json(database);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Edit Database
router.put('/edit/:id', async (req, res) => {
    try {
        const { databaseType, tableName } = req.body;
        const updatedDatabase = await Database.findByIdAndUpdate(req.params.id, { databaseType, tableName }, { new: true });
        res.status(200).json(updatedDatabase);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete Database
router.delete('/delete/:id', async (req, res) => {
    try {
        await Database.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Database deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;