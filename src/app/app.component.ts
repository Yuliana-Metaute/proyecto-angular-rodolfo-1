/*import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pijama';

  constructor(
    private taskService: TaskService
  ){}
  getAllTasks() {
    this.taskService.getAllTasks()
    .subscribe(tasks => {
      console.log(tasks);
    });
  }
  getTasks() {
    this.taskService.getTasks('1')
    .subscribe(tasks => {
      console.log(tasks);
    });
  }
}*/
import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-http-client';

  constructor(
    private taskService: TaskService
  ) {}

  getAllTasks() {
    this.taskService.getAllTasks()
    .subscribe(tasks => {
      console.log(tasks);
    });
  }

  getTask() {
    this.taskService.getTask('2')
    .subscribe(task => {
      console.log(task);
    });
  }

  createTask() {
    const task = {
      userId: '3',
      title: 'yuli',
      completed: true
    };
    this.taskService.createTask(task)
    .subscribe((newTask) => {
      console.log(newTask);
    });
  }

  updateTask() {
    const task = {
      id: '200',
      userId: '1',
      title: 'por otro titulo',
      completed: true
    };
    this.taskService.updateTask(task)
    .subscribe(todo => {
      console.log(todo);
    });
  }

  deleteTask() {
    this.taskService.deleteTask('1')
    .subscribe((data) => {
      console.log(data);
    });
  }
}
 