import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customerList/customerList.component';
import { HighLightDirective } from './customhidden.directive';
import { DoctorComponent } from './doctor/doctor.component';
import { EmployeeComponent } from './employee.component';
import { HospitalComponent } from './hospital/hospital.component';
import { MessageComponent } from './message.component';

import { NurseComponent } from './nurse/nurse.component';
import { PatientComponent } from './patient/patient.component';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [
    AppComponent,CustomerComponent,EmployeeComponent,ProductComponent,MessageComponent,
    DoctorComponent,PatientComponent,HospitalComponent,NurseComponent,HighLightDirective,CustomerListComponent
  
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
