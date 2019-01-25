import {Component} from '@angular/core';
import {County} from '../county-service/county-service';


@Component({
    moduleId:     module.id,
    selector:    'osl-application', 
    templateUrl: 'application.component.html',
	styleUrls: 	['application.component.css']
})
export default class ApplicationComponent {
     counties: Array<County> = []; 
  
  constructor() { 
    
    }
}
