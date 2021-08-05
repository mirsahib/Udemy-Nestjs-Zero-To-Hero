import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import {v4 as uuidv4} from 'uuid'
import { CreateTaskDTO } from './dto/task.dto';

@Injectable()
export class TasksService {

    private tasks = []

    getAllTasks():Task[]{
        return this.tasks
    }

    createTask(createTaskDto:CreateTaskDTO):Task{
        const {title,description} = createTaskDto
        const task:Task = {
            id:uuidv4(),
            title,
            description,
            status:TaskStatus.open
        }

        this.tasks.push(task)
        return task
    }

    getTaskById(id:string){
        return this.tasks.find(task=>task.id===id)
    }

    deleteTask(id:string){
        return this.tasks.filter(task=>task.id!=id)
    }

    updateTaskStatus(id:string,status:TaskStatus){
        const task = this.getTaskById(id)
        task.status = status
        return task
    }

}
