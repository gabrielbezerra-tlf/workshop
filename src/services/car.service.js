const CarModel = require('../schemas/cars.schema');

class CarService {
  async createCar(car) {
    const validBrands = [
      'TOYOTA',
      'HONDA',
      'VOLKSWAGEN',
      'FIAT',
      'BMW',
      'MERCEDES',
    ];

    if (!validBrands.includes(car.brand.toUpperCase())) {
      throw new Error('Invalid car brand');
    }

    const newCar = new CarModel(car);
    await newCar.save();
    return newCar;
  }

  async getCars() {
    return CarModel.find();
  }

  async getCar(id) {
    const car = CarModel.findById(id);
    if (!car || car === null) {
      throw new Error('Car not found');
    }

    return car;
  }

  async updateCar(id, car) {
    const updatedCar = await CarModel.findByIdAndUpdate(id, car, { new: true });

    if (!updatedCar) {
      throw new Error('Car not found');
    }

    return updatedCar;
  }

  async deleteCar(id) {
    const car = await CarModel.findByIdAndDelete(id);

    if (!car) {
      throw new Error('Car not found');
    }

    return car;
  }
}

module.exports = new CarService();
