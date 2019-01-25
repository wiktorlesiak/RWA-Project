import {Component} from '@angular/core';

import {Summary, SummaryService} from '../summary-service/summary-service';
@Component({
    moduleId:     module.id,
    selector:    'osl-meath', 
    templateUrl: 'meath.component.html',
	styleUrls: 	['meath.component.css']
})
export default class MeathComponent {
   summaries: Array<Summary> = []; 
    
     constructor() { 
        let summaryService = new SummaryService();
        this.summaries = summaryService.getMeathSummary(); 
    }
}