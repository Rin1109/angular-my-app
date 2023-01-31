import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  newAddress = '';
  createAddress = '';
  animals = false;
  fruits:any = ['apple', 'lemon', 'cherry', 'banana']


  constructor() { }

  ngOnInit(): void {
  }

  onCreateAddress() {
    this.createAddress = 'Your new address is '+ this.newAddress;
    this.newAddress = '';
    setTimeout(() => {
      this.createAddress = ''}, 2000)}

  toggleAnimals() {
    this.animals = !this.animals;
  }

  fruitsList() {
   this.fruits = !this.fruits
  }
}
