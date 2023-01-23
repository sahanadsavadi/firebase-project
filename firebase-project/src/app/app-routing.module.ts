import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegistrComponent } from './component/registr/registr.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full' },
  {path:'login',component:LoginComponent },
  {path:'dashboard',component:DashboardComponent },
  {path:'register',component:RegistrComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
