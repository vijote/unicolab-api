const httpStatus = require('http-status');
const CareerPathService = require("../service/CareerPathService");

class CareerPathController {
    constructor() {
        this.careerPathService = new CareerPathService();
    }

    getAllCareerPaths = async (req, res) => {
        try {
            const careerPaths = await this.careerPathService.getAllCareerPaths();
            console.log(careerPaths);
            
            res.status(200).json(careerPaths)
        } catch (e) {
            console.log(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };
}

module.exports = CareerPathController;
