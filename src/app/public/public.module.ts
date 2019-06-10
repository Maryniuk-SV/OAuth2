import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [PublicComponent, LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    PublicRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PublicModule {}
