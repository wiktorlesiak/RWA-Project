import {Component} from '@angular/core';
import {Input} from '@angular/core';
import {Summary, SummaryService} from '../summary-service/summary-service';

@Component({
    moduleId:     module.id,
    selector:    'osl-dublin', 
    templateUrl: 'dublin.component.html',
	styleUrls: 	['dublin.component.css']
})
export default class DublinComponent {
    
  summaries: Array<Summary> = []; 

   constructor() { 
        let summaryService = new SummaryService();
        this.summaries = summaryService.getDublinSummary(); 
    }
}