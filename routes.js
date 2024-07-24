const express = require('express');
const router = express.Router();

const db = {
    inventory: {
        add: (items) => {/* ... */},
        update: (updates) => {/* ... Each item in updates should have an id and item info */},
        delete: (ids) => {/* ... */},
        get: (id) => {/* ... */},
        bulkGet: (ids) => {/* ... */} 
    },
    employees: {
        add: (employees) => {/* ... */},
        update: (updates) => {/* ... Each item in updates should have an id and employee info */},
        delete: (ids) => {/* ... */},
        get: (id) => {/* ... */},
        bulkGet: (ids) => {/* ... */} 
    }
};

function handleError(res, error) {
    console.error(error);
    if(error instanceof CustomError) {
        res.status(error.statusCode).json({ message: error.message });
    } else {
        res.status(500).json({ message: "An error occurred. Please try again later." });
    }
}

class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

router.post('/inventory/bulk', (req, res) => {
    try {
        db.inventory.add(req.body); 
        res.status(201).send();
    } catch (error) {
        handleError(res, error);
    }
});

router.put('/inventory/bulk', (req, res) => {
    try {
        db.inventory.update(req.body); 
        res.send();
    } catch (error) {
        handleError(res, error);
    }
});

router.delete('/inventory/bulk', (req, res) => {
    try {
        db.inventory.delete(req.body); 
        res.send();
    } catch (error) {
        handleError(res, error);
    }
});

module.exports = router;