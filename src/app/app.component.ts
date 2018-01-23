import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})
export class AppComponent { 
  name: string = 'Welcome';
  appList: any[] = [{
    'ID': '1',
    'url': 'app/Images/1.jpg'
  },
  {
    'ID': '2',
    'url': 'app/Images/2.jpg'
  },
  {
    'ID': '3',
    'url': 'app/Images/3.jpg'
  }];
}
