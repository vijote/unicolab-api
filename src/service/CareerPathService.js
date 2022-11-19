const CareerPathDao = require("../dao/CareerPathDao");

class CareerPathService {
    constructor() {
        this.careerPathDao = new CareerPathDao();
    }

    getAllCareerPaths() {
        return this.careerPathDao.getAll()
    }
}

module.exports = CareerPathService