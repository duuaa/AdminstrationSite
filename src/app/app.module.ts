
//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
//services

import { AuthService } from './shared/services/auth.service';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

//guards
import { AuthGuard } from './shared/guards/auth.guard';
import { NotfouundComponent } from './components/notfouund/notfouund.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
    HttpClientModule,
    BrowserAnimationsModule,
    
  ],
  providers: [
    AuthService,
    AuthGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
