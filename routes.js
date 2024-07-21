const express = require('express');
const router = express.Router();

const db = {
    inventory: {
        add: (item) => {/* ... */},
        update: (id, item) => {/* ... */},
        delete: (id) => {/* ... */},
        get: (id) => {/* ... */}
    },
    employees: {
        add: (employee) => {/* ... */},
        update: (id, employee) => {/* ... */},
        delete: (id) => {/* ... */},
        get: (id) => {/* ... */}
    },
    operations: {
        add: (operation) => {/* ... */},
        update: (id, operation) => {/* ... */},
        delete: (id) => {/* ... */},
        get: (id) => {/* ... */}
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

router.post('/inventory', (req, res) => {
    try {
        db.inventory.add(req.body);
        res.status(201).send();
    } catch (error) {
        handleError(res, error);
    }
});

router.put('/inventory/:id', (req, res) => {
    try {
        db.inventory.update(req.params.id, req.body);
        res.send();
    } catch (error) {
        handleError(res, error);
    }
});

router.delete('/inventory/:id', (req, res) => {
    try {
        db.inventory.delete(req.params.id);
        res.send();
    } catch (error) {
        handleError(res, error);
    }
});

router.get('/inventory/:id', (req, res) => {
    try {
        const item = db.inventory.get(req.params.id);
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ message: "Item not found." });
        }
    } catch (error) {
        handleError(res, error);
    }
});

router.post('/employees', (req, res) => {
    try {
        db.employees.add(req.body);
        res.status(201).send();
    } catch (error) {
        handleError(res, error);
    }
});

router.put('/employees/:id', (req, res) => {
    try {
        db.employees.update(req.params.id, req.body);
        res.send();
    } catch (error) {
        handleError(res, error);
    }
});

router.delete('/employees/:id', (req, res) => {
    try {
        db.employees.delete(req.params.id);
        res.send();
    } catch (error) {
        handleError(res, error);
    }
});

router.get('/employees/:id', (req, res) => {
    try {
        const employee = db.employees.get(req.params.id);
        if (employee) {
            res.json(employee);
        } else {
            res.status(404).json({ message: "Employee not found." });
        }
    } catch (error) {
      handleError(res, error);
    }
});

module.exports = router;