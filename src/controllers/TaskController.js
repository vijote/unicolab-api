const httpStatus = require('http-status');
const TaskService = require("../service/TaskService");

class TaskController {
    constructor() {
        this.taskService = new TaskService();
    }

    getAllByCareerPathId = async (req, res) => {
        try {
            const { careerPathId } = req.params
            const careerPaths = await this.taskService.getAllTasks(careerPathId);
            console.log(careerPaths);
            
            res.status(200).json(careerPaths)
        } catch (e) {
            console.log(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };
}

module.exports = TaskController;
