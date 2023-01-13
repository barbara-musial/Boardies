import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NavBarButtonComponent } from './navigation-bar/nav-bar-button/nav-bar-button.component';
import { NavBarLogoComponent } from './navigation-bar/nav-bar-logo/nav-bar-logo.component';
import { HomePageComponent } from './home-page/home-page.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DashboardContainerComponent,
    NavigationBarComponent,
    NavBarButtonComponent,
    NavBarLogoComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
