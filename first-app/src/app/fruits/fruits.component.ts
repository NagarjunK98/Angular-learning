import { Component, OnInit } from '@angular/core';
import { FruitserviceService } from './../fruitservice.service';
@Component({
  selector: 'app-fruit',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css'],
})
export class FruitComponent implements OnInit {
  name1 = '';
  name2 = '';
  name3 = '';
  name4 = '';
  fruitStatus1 = 'No fruit is added';
  fruitStatus2 = 'Empty fruit';
  statusCheck = false;
  displayStatus = false;
  color = '';
  fruits = ['apple', 'orange'];
  fruitPick = 'orange';
  pipeName = 'welcome to angular';
  pipeNumber = 1.234;
  pipeDate = new Date();
  fruitsList = [];
  errorMsg = '';
  getCount() {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = 0;
    a.forEach((element) => {
      result += element;
    });
    return result;
  }
  buttonStatus1 = false;

  constructor(private _fruitService: FruitserviceService) {
    setTimeout(() => {
      this.buttonStatus1 = true;
    }, 2000);
  }
  ngOnInit() {
    this._fruitService.getFruits().subscribe(
      (data) => (this.fruitsList = data),
      (error) => (this.errorMsg = error)
    );
  }
  fruitName1() {
    this.fruitStatus1 = 'Fruit added is ' + this.name1;
  }
  fruitName2() {
    this.displayStatus = true;
  }
  setColor() {
    if (this.name4.length % 2 == 0) {
      this.color = 'green';
    } else {
      this.color = 'red';
    }
  }
  getColor() {
    return this.color;
  }
}
