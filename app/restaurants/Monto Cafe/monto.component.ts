import {Component, Input, OnInit} from '@angular/core';
import {County} from '../../county-service/county-service';


@Component({
    moduleId:     module.id,
    selector:    'osl-monto', 
    templateUrl: 'monto.component.html',
    styleUrls: ['monto.component.css']
})
export default class MontoComponent {
     @Input() county: County;

      ngOnInit(){
    }
}