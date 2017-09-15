import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';

import { routing, appRoutingProviders } from "./home.routing";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
    ],
    declarations: [
        HomeComponent
    ],
    providers:[appRoutingProviders],
    bootstrap: [ HomeComponent ]
})
export class HomeModule { }