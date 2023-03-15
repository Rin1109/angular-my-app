import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello'
  clicks: number = 0;

  // onChanged(increased: any) {
  //   increased == true ? this.clicks++ : this.clicks--;
  // }
  onChanged(increased: any) {
    increased == true ? this.clicks++ : this.clicks--;
  }
}
