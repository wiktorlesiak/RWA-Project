// Implement ScoreComponent here.
import {Component, NgModule, Input, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'osl-score',
    templateUrl: 'score.component.html',
    styleUrls: ['score.component.css'], 
})
export default class ScoreComponent implements OnInit{
    
    @Input() scores: number;
    starsEmpty: boolean[] = [];
    
    ngOnInit(){
        if(this.scores > 1){
           this.starsEmpty.push(false);
        } else {
           this.starsEmpty.push(true); 
        }
        
        if(this.scores > 2){
           this.starsEmpty.push(false);
        } else {
           this.starsEmpty.push(true); 
        }
        
        if(this.scores > 3){
           this.starsEmpty.push(false);
        } else {
           this.starsEmpty.push(true); 
        } 
        
        if(this.scores > 4){
           this.starsEmpty.push(false);
        } else {
           this.starsEmpty.push(true); 
        } 
        
        if(this.scores == 5){
           this.starsEmpty.push(false);
        } else {
           this.starsEmpty.push(true); 
        } 
    }
}
