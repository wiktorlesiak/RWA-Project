import {Component, Input, OnInit} from '@angular/core';
import {Summary} from '../summary-service/summary-service';


@Component({
    moduleId:     module.id,
    selector:    'osl-summary',
    templateUrl: 'summary.component.html',
    styleUrls:  ['summary.component.css'] 
})
export default class SummaryComponent implements OnInit{
    @Input() summary: Summary;

    ngOnInit(){
    }
}
