import {Component, Input, OnInit} from '@angular/core';
import {County} from '../../county-service/county-service';


@Component({
    moduleId:     module.id,
    selector:    'osl-earls', 
    templateUrl: 'earls.component.html',
    styleUrls: ['earls.component.css']
})
export default class EarlsComponent {
     @Input() county: County;

      ngOnInit(){
    }
}