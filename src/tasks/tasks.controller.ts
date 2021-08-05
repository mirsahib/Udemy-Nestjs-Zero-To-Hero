import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTaskDTO } from './dto/task.dto';
import { Task, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private taskService:TasksService){ }

    @Get()
    getAllTasks():Task[]{
        return this.taskService.getAllTasks()
    }

    @Post()
    createTask(@Body() createTask:CreateTaskDTO ){
        return this.taskService.createTask(createTask)
    }

    @Get('/:id')
    getTaskById(@Param('id') id:string){
        return this.taskService.getTaskById(id)
    }

    @Delete('/:id')
    deleteTask(id:string){
        return this.taskService.deleteTask(id)
    }

    @Put('/status/:id')
    updateTaskById(@Param('id') id:string,@Body('status') status:TaskStatus  ){
        console.log(id,status)
        return this.taskService.updateTaskStatus(id,status)
    }
}
