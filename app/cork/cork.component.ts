import {Component} from '@angular/core';
import {Summary, SummaryService} from '../summary-service/summary-service';

@Component({
    moduleId:     module.id,
    selector:    'osl-cork', 
    templateUrl: 'cork.component.html',
	styleUrls: 	['cork.component.css']
})
export default class CorkComponent {
    
    
     summaries: Array<Summary> = []; 
   constructor() { 
        let summaryService = new SummaryService();
        this.summaries = summaryService.getCorkSummary(); 
    }
}