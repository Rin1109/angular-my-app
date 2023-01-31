import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showInfo = false;
  log:any = [];

  onToggleInfo() {
    this.showInfo = !this.showInfo;
    this.log.push(this.log.length + 1);
}


}
