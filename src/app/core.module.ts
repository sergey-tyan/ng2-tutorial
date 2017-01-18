import {NgModule} from "@angular/core";

import {HomeComponent} from './home.component';
import {DropdownDirective} from './dropdown.directive';

@NgModule({
	declarations :[
		DropdownDirective,
	    HomeComponent
   ],
   exports:[DropdownDirective]
})
export class CoreModule{}