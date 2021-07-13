import { Component } from '@angular/core';
@Component({
  selector: 'app-fruit',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css'],
})
export class FruitComponent {
  name = 'Apple';
  getName() {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = 0;
    a.forEach((element) => {
      result += element;
    });
    return result;
  }
  buttonStatus = false;

  constructor() {
    setTimeout(() => {
      this.buttonStatus = true;
    }, 2000);
  }
  fruitName() {
    this.name = 'Mango';
  }
}
