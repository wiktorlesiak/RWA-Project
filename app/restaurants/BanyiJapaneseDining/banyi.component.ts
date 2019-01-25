import {Component, Input, OnInit} from '@angular/core';
import {County} from '../../county-service/county-service';


@Component({
    moduleId:     module.id,
    selector:    'osl-banyi', 
    templateUrl: 'banyi.component.html',
    styleUrls: ['banyi.component.css']
})
export default class BanyiComponent {
     @Input() county: County;

      ngOnInit(){
    }
}