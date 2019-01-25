import {Component, Input, OnInit} from '@angular/core';
import {County} from '../../county-service/county-service';


@Component({
    moduleId:     module.id,
    selector:    'osl-bach', 
    templateUrl: 'bach.component.html',
    styleUrls: ['bach.component.css']
})
export default class BachComponent {
     @Input() county: County;

      ngOnInit(){
    }
}