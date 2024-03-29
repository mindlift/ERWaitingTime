import {Component} from 'angular2/core';
import {Component,Input} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Home} from "./dashboard";
import {Login} from "./login";
import {EquipmentComponent} from "./equipment.component";
import {PatientComponent} from "./patient.component";
import {PatientRegisterComponent} from "./patientregister.component";

@Component({
    selector: 'my-app',
    directives: [PatientRegisterComponent],
    template: '<patientregister></patientregister>'
})

export class AppComponent {

}


