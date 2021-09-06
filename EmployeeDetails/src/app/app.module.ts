import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListListComponent } from './employee-list-list/employee-list-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentListComponent,
    EmployeeListListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const routingComponents=[DepartmentListComponent,EmployeeListListComponent]
