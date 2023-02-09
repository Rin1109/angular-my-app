import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
  newElements:any[] = [{type: 'server', name: 'Testserver', content: 'Just a test'}];


}


