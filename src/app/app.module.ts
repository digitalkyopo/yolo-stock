import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from "@clr/angular";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StockService } from './stock.service';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { routes } from './router';
import { AppUserService } from './app-user.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule, ClarityModule, HttpClientModule, FormsModule, routes
  ],
  providers: [
    StockService, AppUserService   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
