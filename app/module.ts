import {Routes, RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import ApplicationComponent from './application/application.component';
import MenubarComponent from './menubar/menubar.component';
import FooterComponent from './footer/footer.component'
import HomeComponent from './home/home.component'
import DublinComponent from './dublin/dublin.component'
import MeathComponent from './meath/meath.component'
import CorkComponent from './cork/cork.component'
import BachComponent from './restaurants/bach/bach.component'
import SpireComponent from './restaurants/spire/spire.component'
import EarlsComponent from './restaurants/earls/earls.component'
import TeachComponent from './restaurants/teach/teach.component'

import BanyiComponent from './restaurants/BanyiJapaneseDining/banyi.component'
import MontoComponent from './restaurants/Monto Cafe/monto.component'
import NostaComponent from './restaurants/Nosta/nosta.component'
import SonComponent from './restaurants/Son of a Bun/son.component'
import ChillipadiComponent from './restaurants/Chillipadi/chillipadi.component'

import SummaryComponent from './summary/summary.component'

import ScoreComponent from './score/score.component'


@NgModule({
    imports: [BrowserModule, RouterModule.forRoot([
        {
            path: '',
            component: HomeComponent
        },
        {
            path: 'dublin',
            component: DublinComponent
        },
          {
            path: 'meath',
            component: MeathComponent
        },
         {
            path: 'cork',
            component: CorkComponent
        },
         {
            path: 'restaurants/4',
            component: SpireComponent
        },
         {
            path: 'restaurants/5',
            component: EarlsComponent
        },
         {
            path: 'restaurants/3',
            component: TeachComponent
        },
         {
            path: 'restaurants/2',
            component: BachComponent
        },
        {
            path: 'restaurants/1',
            component: BanyiComponent
        },
         {
            path: 'restaurants/0',
            component: MontoComponent
        },
         {
            path: 'restaurants/6',
            component: NostaComponent
        },
         {
            path: 'restaurants/7',
            component: SonComponent
        },
         {
            path: 'restaurants/8',
            component: ChillipadiComponent
        }
    ])
    ],
    declarations: [ApplicationComponent, 
                   MenubarComponent, 
                   FooterComponent, 
                   DublinComponent, 
                   HomeComponent, 
                   MeathComponent,
                   CorkComponent,
                   BachComponent,
				   BanyiComponent,
                  SpireComponent,
                  TeachComponent,
                  EarlsComponent,
                  BanyiComponent,
				   MontoComponent,
				   NostaComponent,
				   SonComponent,
				   ChillipadiComponent,
                  SummaryComponent,
                   ScoreComponent
                  ],
    bootstrap: [ApplicationComponent]
})
export default class AppModule {}


