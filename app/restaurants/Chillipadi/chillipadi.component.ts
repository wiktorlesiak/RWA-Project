import {Component, Input, OnInit} from '@angular/core';
import {County} from '../../county-service/county-service';


@Component({
    moduleId:     module.id,
    selector:    'osl-chillipadi', 
    templateUrl: 'chillipadi.component.html',
    styleUrls: ['chillipadi.component.css']
})
export default class ChillipadiComponent {
     @Input() county: County;

      ngOnInit(){
    }
}