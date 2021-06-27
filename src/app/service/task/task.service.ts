import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'src/app/model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksUrl: string;

  constructor(private http: HttpClient) {
    this.tasksUrl = 'http://localhost:8080/api/tasks'
   }

   public findAll(): Observable<Task[]> {
    var test = this.http.get<Task[]>(this.tasksUrl);
    console.log(test[0])
     return test;
   }
}
