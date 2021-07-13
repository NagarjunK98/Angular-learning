import { Component } from '@angular/core';
@Component({
  selector: 'app-fruit',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css'],
})
export class FruitComponent {
  name1 = '';
  name2 = '';
  name3 = '';
  name4 = '';
  fruitStatus1 = 'No fruit is added';
  fruitStatus2 = 'Empty fruit';
  statusCheck = false;
  displayStatus = false;
  color="";
  getName() {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = 0;
    a.forEach((element) => {
      result += element;
    });
    return result;
  }
  buttonStatus1 = false;

  constructor() {
    setTimeout(() => {
      this.buttonStatus1 = true;
    }, 2000);
  }
  fruitName1() {
    this.fruitStatus1 = 'Fruit added is ' + this.name1;
  }
  fruitName2() {
    this.displayStatus = true;
  }
  setColor() {
    if(this.name4.length % 2 ==0) {
      this.color = "green";
    } else {
      this.color="red";
    }
  }
  getColor() {
    return this.color;
  }
}
