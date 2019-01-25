import {Component, Input, OnInit} from '@angular/core';
import {County} from '../../county-service/county-service';


@Component({
    moduleId:     module.id,
    selector:    'osl-spire', 
    templateUrl: 'spire.component.html',
    styleUrls: ['spire.component.css']
})
export default class SpireComponent {
     @Input() county: County;

      ngOnInit(){
    }
}