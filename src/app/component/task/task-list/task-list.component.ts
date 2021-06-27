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
  newTask: Task

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.findAll().subscribe(data => this.tasks = data);
    this.newTask = new Task();
  }

  changeCompleted(task: Task) {
    this.taskService.update(task);
  }

  add() {
    this.taskService.create(this.newTask);
    window.location.reload();
  }

}
