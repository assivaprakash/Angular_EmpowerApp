import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListListComponent } from './employee-list-list/employee-list-list.component';

const routes: Routes = [
{path:'departments',component:DepartmentListComponent},
{path:'employeelists',component:EmployeeListListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents1=[DepartmentListComponent,EmployeeListListComponent]