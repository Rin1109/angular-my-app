import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  newAddress = '';
  createAddress = '';


  constructor() { }

  ngOnInit(): void {
  }

  onCreateAddress() {
    this.createAddress = 'Your new address is '+ this.newAddress;
    this.newAddress = '';
    setTimeout(() => {
      this.createAddress = ''}, 2000)}

}
