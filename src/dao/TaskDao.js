const SuperDao = require('./SuperDao');
const models = require('../models');

const { Task } = models;

class TaskDao extends SuperDao {
    constructor() {
        super(Task);
    }

    async getAll() {
        return this.Model.findAll();
    }
}

module.exports = TaskDao;
