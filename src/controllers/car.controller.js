const CarService = require('../services/car.service');

class CarController {
  async createCar(req, res) {
    try {
      const car = await CarService.createCar(req.body);
      res.status(201).json(car);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getCars(req, res) {
    try {
      const cars = await CarService.getCars();
      res.status(200).json(cars);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getCar(req, res) {
    try {
      const car = await CarService.getCar(req.params.id);
      res.status(200).json(car);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async updateCar(req, res) {
    try {
      const car = await CarService.updateCar(req.params.id, req.body);
      res.status(200).json(car);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async deleteCar(req, res) {
    try {
      const car = await CarService.deleteCar(req.params.id);
      res.status(200).json(car);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new CarController();
