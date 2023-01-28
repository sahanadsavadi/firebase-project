import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegistrComponent } from './component/registr/registr.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './component/varify-email/varify-email.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full' },
  {path:'login',component:LoginComponent },
  {path:'dashboard',component:DashboardComponent },
  {path:'register',component:RegistrComponent },
  {path:'varify-email',component:VarifyEmailComponent },
  {path:'forgot-password',component:ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
