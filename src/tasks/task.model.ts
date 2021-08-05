 export interface Task{
    id:string,
    title:string,
    description:string
    status:TaskStatus
 }

 export enum TaskStatus{
     open = 'OPEN',
     in_progress = 'IN_PROGRESS',
     done = 'DONE'
 }