import {Component, Input, OnInit} from '@angular/core';
import {County} from '../../county-service/county-service';


@Component({
    moduleId:     module.id,
    selector:    'osl-teach', 
    templateUrl: 'teach.component.html',
    styleUrls: ['teach.component.css']
})
export default class TeachComponent {
     @Input() county: County;

      ngOnInit(){
    }
}