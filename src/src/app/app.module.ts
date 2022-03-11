import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auths/login/login.component';
import { NavMainComponent } from './components/nav/nav-main/nav-main.component';
import { NavFooterComponent } from './components/nav/nav-footer/nav-footer.component';
import { HttpClientModule } from '@angular/common/http'

import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavMainComponent,
    NavFooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
    AppRoutingModule,
    HttpClientModule,  
    FormsModule,
    TableModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
