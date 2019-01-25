import {Component, Input, OnInit} from '@angular/core';
import {County} from '../../county-service/county-service';


@Component({
    moduleId:     module.id,
    selector:    'osl-nosta', 
    templateUrl: 'nosta.component.html',
    styleUrls: ['nosta.component.css']
})
export default class NostaComponent {
     @Input() county: County;

      ngOnInit(){
    }
}