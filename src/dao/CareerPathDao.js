const SuperDao = require('./SuperDao');
const models = require('../models');

const { CareerPath } = models;

class CareerPathDao extends SuperDao {
    constructor() {
        super(CareerPath);
    }

    async getAll() {
        return this.Model.findAll();
    }
}

module.exports = CareerPathDao;
