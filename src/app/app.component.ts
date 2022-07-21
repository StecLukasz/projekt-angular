import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projekt angular';


  days = ['Poniedziałek', 'Wtorek','Środa','Czwartek','Piątek','Sobota','Niedziela'];

  dogs = new Array<Dog>();
  constructor(){
    this.dogs.push(new Dog('Kazan' , 13), new Dog('Puszek', 4), new Dog('Kupa', 8) , new Dog('Pimpek', 6), new Dog('Sara', 1));
  }
 isHidden = false;

 hidden(){
this.isHidden = !this.isHidden;
 }
}

class Dog{
  constructor(public name: string, public age: number){
  }
}

