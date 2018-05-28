import { NgModule } from '@angular/core';
import { MapsComponent } from './maps/maps';
import { AgmCoreModule } from '@agm/core';

@NgModule({
	declarations: [MapsComponent],
	imports: [
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyDNeuGqcJkW6WcgZEr2Ir7BaiCqcCITaZ8'
		  })
	],
	exports: [MapsComponent]
})
export class ComponentsModule {}
