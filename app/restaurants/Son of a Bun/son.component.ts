import {Component, Input, OnInit} from '@angular/core';
import {County} from '../../county-service/county-service';


@Component({
    moduleId:     module.id,
    selector:    'osl-son', 
    templateUrl: 'son.component.html',
    styleUrls: ['son.component.css']
})
export default class SonComponent {
     @Input() county: County;

      ngOnInit(){
    }
}