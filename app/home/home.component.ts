import {Component} from '@angular/core';
import {Summary, SummaryService} from '../summary-service/summary-service';

@Component({
    moduleId:     module.id,
    selector:    'osl-home', 
    templateUrl: 'home.component.html',
	styleUrls: 	['home.component.css']
})
export default class HomeComponent {
 summaries: Array<Summary> = []; 

   constructor() { 
        let summaryService = new SummaryService();
        this.summaries = summaryService.getPopSummary(); 
    }
}
