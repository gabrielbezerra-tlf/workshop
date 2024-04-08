const express = require('express');
const CarController = require('../controllers/car.controller');

const router = express.Router();

router.post('/', CarController.createCar);
router.get('/', CarController.getCars);
router.get('/:id', CarController.getCar);
router.put('/:id', CarController.updateCar);
router.delete('/:id', CarController.deleteCar);

module.exports = router;
