import { Component } from '@angular/core';


@Component({
  selector: 'maps',
  templateUrl: 'maps.html'
})
export class MapsComponent {

  lat = 43.3763557;
  lng = -8.407468;


  constructor() {
    console.log('Hello MapsComponent Component');
  }

}
