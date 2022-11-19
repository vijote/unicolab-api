const TaskDao = require("../dao/TaskDao");

class CareerPathService {
    constructor() {
        this.taskDao = new TaskDao();
    }

    getAllTasks(careerPathId) {
        return this.taskDao.getAll({ where: { careerPathId } })
    }
}

module.exports = CareerPathService