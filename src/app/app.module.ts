
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { StudentService } from './shared/services/student.service';
import { AuthService } from './shared/services/auth.service';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './shared/guards/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    StudentService,
    AuthService,
    AuthGuard 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
