import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  // title = 'projekt angular';


  tasksList: Array<string> = [];
  taskDone: Array<string> = [];

  ngOnInit(): void {
    this.tasksList = ['Sprzatanie po psie', 'Nauka Angulara', 'Rolnictwo','Zakupy'];
  }

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
