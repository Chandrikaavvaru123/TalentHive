// angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// PrimeNg Imports
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

//Local Imports
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule
  ],
  exports:[
    LoginComponent
  ]
})
export class FeatureModule { }
