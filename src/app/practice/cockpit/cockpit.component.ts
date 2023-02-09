import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newName = '';
  newContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
  //   this.newElements.push({
  //     type: 'server',
  //     name: this.newName,
  //     content: this.newContent
  //   })
   }

  onAddBlueprint() {
  //   this.newElements.push({
  //     type: 'blueprint',
  //     name: this.newName,
  //     content: this.newContent
  //   })
}

}
