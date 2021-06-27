import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/service/task/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  
  tasks: Task[]

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.findAll().subscribe(data => this.tasks = data)
  }

}
