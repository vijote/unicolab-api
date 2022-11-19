const SuperDao = require('./SuperDao');
const models = require('../models');

const { Task } = models;

class TaskDao extends SuperDao {
    constructor() {
        super(Task);
    }

    async getAll(options) {
        return this.Model.findAll(options);
    }
}

module.exports = TaskDao;
