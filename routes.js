const express = require('express');
const router = express.Router();

const db = {
    inventory: {
        add: (item) => {},
        update: (id, item) => {},
        delete: (id) => {},
        get: (id) => {}
    },
    employees: {
        add: (employee) => {},
        update: (id, employee) => {},
        delete: (id) => {},
        get: (id) => {}
    },
    operations: {
        add: (operation) => {},
        update: (id, operation) => {},
        delete: (id) => {},
        get: (id) => {}
    }
};

router.post('/inventory', (req, res) => db.inventory.add(req.body));
router.put('/inventory/:id', (req, res) => db.inventory.update(req.params.id, req.body));
router.delete('/inventory/:id', (req, res) => db.inventory.delete(req.params.id));
router.get('/inventory/:id', (req, res) => res.json(db.inventory.get(req.params.id)));

router.post('/employees', (req, res) => db.employees.add(req.body));
router.put('/employees/:id', (req, res) => db.employees.update(req.params.id, req.body));
router.delete('/employees/:id', (req, res) => db.employees.delete(req.params.id));
router.get('/employees/:yid', (req, res) => res.json(db.employees.get(req.params.id)));

router.post('/operations', (req, res) => db.operations.add(req.body));
router.put('/operations/:id', (req, res) => db.operations.update(req.params.id, req.body));
router.delete('/operations/:id', (req, res) => db.operations.delete(req.params.id));
router.get('/operations/:id', (req, res) => res.json(db.operations.get(req.params.id)));

module.exports = router;