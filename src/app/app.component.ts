import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'projekt angular';

  newTask:string = "";
  tasksList: Array<string> = [];
  taskDone: Array<string> = [];

  add(task : string) {
    this.tasksList.push(task);
  }

  remove(task: string) {
    this.tasksList = this.tasksList.filter((e) => e !== task);
  }

  done(task: string) {
    this.taskDone.push(task);
    this.remove(task);
  }
}
