import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './feature/components/login/login.component';
import { RegisterComponent } from './feature/components/register/register.component';

const routes: Routes = [
{path:'', component:LoginComponent},
{path:'register', component:RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
